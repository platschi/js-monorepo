import { useQuery, UseQueryOptions } from 'react-query';
import Wei, { wei } from '@synthetixio/wei';
import { QueryContext } from '../../context';
import { BigNumber, utils } from 'ethers';
import {
	useGetLoans,
	useGetShorts,
	useGetSynths,
	useGetWrappers,
} from '../../../generated/mainSubgraphQueries';
import { DEFAULT_SUBGRAPH_ENDPOINTS } from '../../constants';
import { useEffect, useState } from 'react';
import { DebtData } from './useGetDebtL2';

interface DebtOnL1 {
	hasNegativeSkew: boolean;
	totalSupply: Wei;
	symbol: string;
	inUSD: string;
}

const useGetDebtL1 = (ctx: QueryContext, options?: UseQueryOptions<DebtOnL1[]>) => {
	const [debtData, setDebtData] = useState<DebtData | null>(null);
	const wrappers = useGetWrappers(
		DEFAULT_SUBGRAPH_ENDPOINTS[1].subgraph,
		{
			where: {
				maxAmount_gt: 0,
			},
			first: 1000,
		},
		{
			currencyKey: true,
			amount: true,
		},
		{
			queryKey: ['L1', 'wrappers'],
		}
	);
	const synths = useGetSynths(
		DEFAULT_SUBGRAPH_ENDPOINTS[1].subgraph,
		{ first: 1000, where: { symbol_not_in: ['SNX', 'HAV'] } },
		{
			totalSupply: true,
			symbol: true,
		},
		{
			queryKey: ['L1', 'synths'],
		}
	);
	const shorts = useGetShorts(
		DEFAULT_SUBGRAPH_ENDPOINTS[1].subgraph,
		{
			where: { isOpen: true },
			first: 1000,
			orderBy: 'synthBorrowedAmount',
			orderDirection: 'desc',
		},
		{
			synthBorrowed: true,
			synthBorrowedAmount: true,
			collateralLocked: true,
			collateralLockedAmount: true,
		},
		{
			queryKey: ['L1', 'shorts'],
		}
	);

	const loans = useGetLoans(
		// TODO @DEV update once L1 subgraph is synced
		'https://api.thegraph.com/subgraphs/name/noahlitvin/mainnet-loans',
		{ where: { isOpen: true }, first: 1000, orderDirection: 'desc', orderBy: 'amount' },
		{ collateralMinted: true, amount: true, collateralAmount: true, currency: true },
		{ queryKey: ['L1', 'loans'] }
	);

	useEffect(() => {
		if (wrappers.isSuccess && synths.isSuccess && loans.isSuccess && shorts.isSuccess) {
			const wrapperData =
				wrappers.isSuccess &&
				wrappers.data.reduce((acc, wrapper) => {
					acc[wrapper.currencyKey] = (acc[wrapper.currencyKey] || wei(0)).add(wrapper.amount);
					return acc;
				}, {} as DebtData['wrapperData']);
			const synthsQuery = synths.isSuccess && synths.data;
			const synthsData = [synthsQuery[0]];
			for (let i = 0; i < synthsQuery.length; i++) {
				if (i !== 0) {
					const doubledSynth = synthsData.filter((s) => s.symbol === synthsQuery[i].symbol);
					if (doubledSynth.length) {
						const summedUpSynthsVal = doubledSynth.reduce((acc, curr) => {
							return acc.add(curr.totalSupply);
						}, wei(0));
						synthsData.push({ ...synthsQuery[i], totalSupply: summedUpSynthsVal });
					}
				}
			}
			const shortsData =
				shorts.isSuccess &&
				shorts.data
					.map((short) => {
						if (short.synthBorrowed.length !== 66 && short.synthBorrowed) {
							short.synthBorrowed = short.synthBorrowed.padEnd(66, '0');
						}
						if (short.collateralLocked.length !== 66 && short.collateralLocked) {
							short.collateralLocked = short.collateralLocked.padEnd(66, '0');
						}
						return {
							...short,
							synthBorrowed: utils.parseBytes32String(short.synthBorrowed),
							collateralLocked: utils.parseBytes32String(short.collateralLocked),
						};
					})
					.reduce((acc, short) => {
						acc[short.synthBorrowed] = (acc[short.synthBorrowed] || wei(0)).add(
							short.synthBorrowedAmount
						);
						return acc;
					}, {} as DebtData['shortsData']);
			const loansData =
				loans.isSuccess &&
				loans.data.reduce((acc, loan) => {
					acc[loan.currency] = (acc[loan.currency] || wei(0)).add(loan.amount);
					return acc;
				}, {} as DebtData['loansData']);
			setDebtData({ wrapperData, synthsData, shortsData, loansData });
		}
	}, [wrappers.isSuccess, synths.isSuccess, loans.isSuccess, shorts.isSuccess]);
	return useQuery<DebtOnL1[]>(
		['debt', 'data', 'L1', ctx.networkId],
		async () => {
			const synthDataWithSkew = debtData!.synthsData.map((synth) => {
				if (!(synth.symbol in debtData!.wrapperData)) return { ...synth, hasNegativeSkew: false };
				return {
					...synth,
					totalSupply: synth.totalSupply.sub(debtData!.wrapperData[synth.symbol]),
					hasNegativeSkew: wei(debtData!.wrapperData[synth.symbol]).sub(synth.totalSupply).gt(0),
				};
			});

			const synthDataWithShorts = synthDataWithSkew.map((synth) => {
				if (synth.symbol === 'sUSD') return synth;
				if (debtData?.shortsData && synth.symbol in debtData.shortsData) {
					return {
						...synth,
						totalSupply: synth.totalSupply.sub(debtData.shortsData[synth.symbol] as Wei),
					};
				}
				return synth;
			});

			const synthDataWithLoans = synthDataWithShorts.map((synth) => {
				if (!(synth.symbol in debtData!.loansData)) return synth;
				return {
					...synth,
					totalSupply: synth.totalSupply?.sub(debtData!.loansData[synth.symbol] as Wei),
				};
			});

			const promises = synthDataWithLoans.map((synth) => {
				if (ctx.snxjs)
					return ctx!.snxjs.contracts.ExchangeRates.rateForCurrency(
						ctx.snxjs.toBytes32(synth.symbol)
					);
			});

			const rates: BigNumber[] = await Promise.all(promises);
			return synthDataWithLoans.map((synth, index) => ({
				...synth,
				inUSD: synth.totalSupply.mul(rates[index]).toString(),
			}));
		},
		{
			enabled:
				ctx.networkId === 1 &&
				!!debtData?.loansData &&
				!!debtData?.shortsData &&
				!!debtData?.synthsData &&
				!!debtData?.wrapperData,
			...options,
		}
	);
};

export default useGetDebtL1;
