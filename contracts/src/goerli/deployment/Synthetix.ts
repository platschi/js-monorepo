// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'Synthetix';
export const address = '0x51f44ca59b867E005e48FA573Cb8df83FC7f7597';
export const source = 'Synthetix';
export const abi = [
  'constructor(address _proxy, address _tokenState, address _owner, uint256 _totalSupply, address _resolver)',
  'event AccountLiquidated(address indexed account, uint256 snxRedeemed, uint256 amountLiquidated, address liquidator)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
  'event AtomicSynthExchange(address indexed account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event ExchangeRebate(address indexed account, bytes32 currencyKey, uint256 amount)',
  'event ExchangeReclaim(address indexed account, bytes32 currencyKey, uint256 amount)',
  'event ExchangeTracking(bytes32 indexed trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event ProxyUpdated(address proxyAddress)',
  'event SynthExchange(address indexed account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)',
  'event TokenStateUpdated(address newTokenState)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function DECIMALS() view returns (uint8)',
  'function TOKEN_NAME() view returns (string)',
  'function TOKEN_SYMBOL() view returns (string)',
  'function acceptOwnership()',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)',
  'function approve(address spender, uint256 value) returns (bool)',
  'function availableCurrencyKeys() view returns (bytes32[])',
  'function availableSynthCount() view returns (uint256)',
  'function availableSynths(uint256 index) view returns (address)',
  'function balanceOf(address account) view returns (uint256)',
  'function burnSecondary(address, uint256)',
  'function burnSynths(uint256 amount)',
  'function burnSynthsOnBehalf(address burnForAddress, uint256 amount)',
  'function burnSynthsToTarget()',
  'function burnSynthsToTargetOnBehalf(address burnForAddress)',
  'function collateral(address account) view returns (uint256)',
  'function collateralisationRatio(address _issuer) view returns (uint256)',
  'function debtBalanceOf(address account, bytes32 currencyKey) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function emitAtomicSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)',
  'function emitExchangeRebate(address account, bytes32 currencyKey, uint256 amount)',
  'function emitExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)',
  'function emitExchangeTracking(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)',
  'function emitSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)',
  'function exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)',
  'function exchangeAtomically(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, bytes32 trackingCode, uint256 minAmount) returns (uint256 amountReceived)',
  'function exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)',
  'function exchangeOnBehalfWithTracking(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)',
  'function exchangeWithTracking(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)',
  'function exchangeWithTrackingForInitiator(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)',
  'function exchangeWithVirtual(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, bytes32 trackingCode) returns (uint256 amountReceived, address vSynth)',
  'function getFirstNonZeroEscrowIndex(address account) view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function isWaitingPeriod(bytes32 currencyKey) view returns (bool)',
  'function issueMaxSynths()',
  'function issueMaxSynthsOnBehalf(address issueForAddress)',
  'function issueSynths(uint256 amount)',
  'function issueSynthsOnBehalf(address issueForAddress, uint256 amount)',
  'function liquidateDelinquentAccount(address account) returns (bool)',
  'function liquidateDelinquentAccountEscrowIndex(address account, uint256 escrowStartIndex) returns (bool)',
  'function liquidateSelf() returns (bool)',
  'function maxIssuableSynths(address account) view returns (uint256 maxIssuable)',
  'function messageSender() view returns (address)',
  'function migrateEscrowBalanceToRewardEscrowV2()',
  'function migrateEscrowContractBalance()',
  'function mint() returns (bool)',
  'function mintSecondary(address, uint256)',
  'function mintSecondaryRewards(uint256)',
  'function name() view returns (string)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function proxy() view returns (address)',
  'function rebuildCache()',
  'function remainingIssuableSynths(address account) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function sUSD() view returns (bytes32)',
  'function setMessageSender(address sender)',
  'function setProxy(address _proxy)',
  'function setTokenState(address _tokenState)',
  'function settle(bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)',
  'function symbol() view returns (string)',
  'function synths(bytes32 currencyKey) view returns (address)',
  'function synthsByAddress(address synthAddress) view returns (bytes32)',
  'function tokenState() view returns (address)',
  'function totalIssuedSynths(bytes32 currencyKey) view returns (uint256)',
  'function totalIssuedSynthsExcludeOtherCollateral(bytes32 currencyKey) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'function transfer(address to, uint256 value) returns (bool)',
  'function transferFrom(address from, address to, uint256 value) returns (bool)',
  'function transferableSynthetix(address account) view returns (uint256 transferable)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface SynthetixInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'DECIMALS()': FunctionFragment;
    'TOKEN_NAME()': FunctionFragment;
    'TOKEN_SYMBOL()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'anySynthOrSNXRateIsInvalid()': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'availableCurrencyKeys()': FunctionFragment;
    'availableSynthCount()': FunctionFragment;
    'availableSynths(uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burnSecondary(address,uint256)': FunctionFragment;
    'burnSynths(uint256)': FunctionFragment;
    'burnSynthsOnBehalf(address,uint256)': FunctionFragment;
    'burnSynthsToTarget()': FunctionFragment;
    'burnSynthsToTargetOnBehalf(address)': FunctionFragment;
    'collateral(address)': FunctionFragment;
    'collateralisationRatio(address)': FunctionFragment;
    'debtBalanceOf(address,bytes32)': FunctionFragment;
    'decimals()': FunctionFragment;
    'emitAtomicSynthExchange(address,bytes32,uint256,bytes32,uint256,address)': FunctionFragment;
    'emitExchangeRebate(address,bytes32,uint256)': FunctionFragment;
    'emitExchangeReclaim(address,bytes32,uint256)': FunctionFragment;
    'emitExchangeTracking(bytes32,bytes32,uint256,uint256)': FunctionFragment;
    'emitSynthExchange(address,bytes32,uint256,bytes32,uint256,address)': FunctionFragment;
    'exchange(bytes32,uint256,bytes32)': FunctionFragment;
    'exchangeAtomically(bytes32,uint256,bytes32,bytes32,uint256)': FunctionFragment;
    'exchangeOnBehalf(address,bytes32,uint256,bytes32)': FunctionFragment;
    'exchangeOnBehalfWithTracking(address,bytes32,uint256,bytes32,address,bytes32)': FunctionFragment;
    'exchangeWithTracking(bytes32,uint256,bytes32,address,bytes32)': FunctionFragment;
    'exchangeWithTrackingForInitiator(bytes32,uint256,bytes32,address,bytes32)': FunctionFragment;
    'exchangeWithVirtual(bytes32,uint256,bytes32,bytes32)': FunctionFragment;
    'getFirstNonZeroEscrowIndex(address)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'isWaitingPeriod(bytes32)': FunctionFragment;
    'issueMaxSynths()': FunctionFragment;
    'issueMaxSynthsOnBehalf(address)': FunctionFragment;
    'issueSynths(uint256)': FunctionFragment;
    'issueSynthsOnBehalf(address,uint256)': FunctionFragment;
    'liquidateDelinquentAccount(address)': FunctionFragment;
    'liquidateDelinquentAccountEscrowIndex(address,uint256)': FunctionFragment;
    'liquidateSelf()': FunctionFragment;
    'maxIssuableSynths(address)': FunctionFragment;
    'messageSender()': FunctionFragment;
    'migrateEscrowBalanceToRewardEscrowV2()': FunctionFragment;
    'migrateEscrowContractBalance()': FunctionFragment;
    'mint()': FunctionFragment;
    'mintSecondary(address,uint256)': FunctionFragment;
    'mintSecondaryRewards(uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'proxy()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'remainingIssuableSynths(address)': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'sUSD()': FunctionFragment;
    'setMessageSender(address)': FunctionFragment;
    'setProxy(address)': FunctionFragment;
    'setTokenState(address)': FunctionFragment;
    'settle(bytes32)': FunctionFragment;
    'symbol()': FunctionFragment;
    'synths(bytes32)': FunctionFragment;
    'synthsByAddress(address)': FunctionFragment;
    'tokenState()': FunctionFragment;
    'totalIssuedSynths(bytes32)': FunctionFragment;
    'totalIssuedSynthsExcludeOtherCollateral(bytes32)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferableSynthetix(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'DECIMALS'
      | 'TOKEN_NAME'
      | 'TOKEN_SYMBOL'
      | 'acceptOwnership'
      | 'allowance'
      | 'anySynthOrSNXRateIsInvalid'
      | 'approve'
      | 'availableCurrencyKeys'
      | 'availableSynthCount'
      | 'availableSynths'
      | 'balanceOf'
      | 'burnSecondary'
      | 'burnSynths'
      | 'burnSynthsOnBehalf'
      | 'burnSynthsToTarget'
      | 'burnSynthsToTargetOnBehalf'
      | 'collateral'
      | 'collateralisationRatio'
      | 'debtBalanceOf'
      | 'decimals'
      | 'emitAtomicSynthExchange'
      | 'emitExchangeRebate'
      | 'emitExchangeReclaim'
      | 'emitExchangeTracking'
      | 'emitSynthExchange'
      | 'exchange'
      | 'exchangeAtomically'
      | 'exchangeOnBehalf'
      | 'exchangeOnBehalfWithTracking'
      | 'exchangeWithTracking'
      | 'exchangeWithTrackingForInitiator'
      | 'exchangeWithVirtual'
      | 'getFirstNonZeroEscrowIndex'
      | 'isResolverCached'
      | 'isWaitingPeriod'
      | 'issueMaxSynths'
      | 'issueMaxSynthsOnBehalf'
      | 'issueSynths'
      | 'issueSynthsOnBehalf'
      | 'liquidateDelinquentAccount'
      | 'liquidateDelinquentAccountEscrowIndex'
      | 'liquidateSelf'
      | 'maxIssuableSynths'
      | 'messageSender'
      | 'migrateEscrowBalanceToRewardEscrowV2'
      | 'migrateEscrowContractBalance'
      | 'mint'
      | 'mintSecondary'
      | 'mintSecondaryRewards'
      | 'name'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'proxy'
      | 'rebuildCache'
      | 'remainingIssuableSynths'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'sUSD'
      | 'setMessageSender'
      | 'setProxy'
      | 'setTokenState'
      | 'settle'
      | 'symbol'
      | 'synths'
      | 'synthsByAddress'
      | 'tokenState'
      | 'totalIssuedSynths'
      | 'totalIssuedSynthsExcludeOtherCollateral'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'transferableSynthetix'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'DECIMALS', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TOKEN_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TOKEN_SYMBOL', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'allowance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'anySynthOrSNXRateIsInvalid', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'availableCurrencyKeys', values?: undefined): string;
  encodeFunctionData(functionFragment: 'availableSynthCount', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'availableSynths',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'burnSecondary',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'burnSynths',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'burnSynthsOnBehalf',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'burnSynthsToTarget', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'burnSynthsToTargetOnBehalf',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'collateral', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'collateralisationRatio',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'debtBalanceOf',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'emitAtomicSynthExchange',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'emitExchangeRebate',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'emitExchangeReclaim',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'emitExchangeTracking',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'emitSynthExchange',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchange',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeAtomically',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeOnBehalf',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeOnBehalfWithTracking',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeWithTracking',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeWithTrackingForInitiator',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeWithVirtual',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'getFirstNonZeroEscrowIndex',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'isWaitingPeriod',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'issueMaxSynths', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'issueMaxSynthsOnBehalf',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'issueSynths',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'issueSynthsOnBehalf',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateDelinquentAccount',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateDelinquentAccountEscrowIndex',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'liquidateSelf', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'maxIssuableSynths',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'messageSender', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'migrateEscrowBalanceToRewardEscrowV2',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'migrateEscrowContractBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'mintSecondary',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'mintSecondaryRewards',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxy', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'remainingIssuableSynths',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sUSD', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setMessageSender',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'setProxy', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setTokenState', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'settle', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'synths', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'synthsByAddress', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'tokenState', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalIssuedSynths',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'totalIssuedSynthsExcludeOtherCollateral',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferableSynthetix',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'DECIMALS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TOKEN_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TOKEN_SYMBOL', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'anySynthOrSNXRateIsInvalid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'availableCurrencyKeys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'availableSynthCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'availableSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnSecondary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnSynthsOnBehalf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnSynthsToTarget', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnSynthsToTargetOnBehalf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collateral', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collateralisationRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debtBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emitAtomicSynthExchange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emitExchangeRebate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emitExchangeReclaim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emitExchangeTracking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emitSynthExchange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeAtomically', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeOnBehalf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeOnBehalfWithTracking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeWithTracking', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'exchangeWithTrackingForInitiator',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'exchangeWithVirtual', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFirstNonZeroEscrowIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isWaitingPeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issueMaxSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issueMaxSynthsOnBehalf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issueSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issueSynthsOnBehalf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidateDelinquentAccount', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateDelinquentAccountEscrowIndex',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'liquidateSelf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxIssuableSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'messageSender', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'migrateEscrowBalanceToRewardEscrowV2',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'migrateEscrowContractBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintSecondary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintSecondaryRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'remainingIssuableSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sUSD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMessageSender', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTokenState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'settle', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'synths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'synthsByAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalIssuedSynths', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalIssuedSynthsExcludeOtherCollateral',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferableSynthetix', data: BytesLike): Result;

  events: {
    'AccountLiquidated(address,uint256,uint256,address)': EventFragment;
    'Approval(address,address,uint256)': EventFragment;
    'AtomicSynthExchange(address,bytes32,uint256,bytes32,uint256,address)': EventFragment;
    'CacheUpdated(bytes32,address)': EventFragment;
    'ExchangeRebate(address,bytes32,uint256)': EventFragment;
    'ExchangeReclaim(address,bytes32,uint256)': EventFragment;
    'ExchangeTracking(bytes32,bytes32,uint256,uint256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'ProxyUpdated(address)': EventFragment;
    'SynthExchange(address,bytes32,uint256,bytes32,uint256,address)': EventFragment;
    'TokenStateUpdated(address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AccountLiquidated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicSynthExchange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeRebate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeReclaim'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeTracking'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProxyUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SynthExchange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenStateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface AccountLiquidatedEventObject {
  account: string;
  snxRedeemed: BigNumber;
  amountLiquidated: BigNumber;
  liquidator: string;
}
export type AccountLiquidatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  AccountLiquidatedEventObject
>;

export type AccountLiquidatedEventFilter = TypedEventFilter<AccountLiquidatedEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface AtomicSynthExchangeEventObject {
  account: string;
  fromCurrencyKey: string;
  fromAmount: BigNumber;
  toCurrencyKey: string;
  toAmount: BigNumber;
  toAddress: string;
}
export type AtomicSynthExchangeEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber, string],
  AtomicSynthExchangeEventObject
>;

export type AtomicSynthExchangeEventFilter = TypedEventFilter<AtomicSynthExchangeEvent>;

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface ExchangeRebateEventObject {
  account: string;
  currencyKey: string;
  amount: BigNumber;
}
export type ExchangeRebateEvent = TypedEvent<
  [string, string, BigNumber],
  ExchangeRebateEventObject
>;

export type ExchangeRebateEventFilter = TypedEventFilter<ExchangeRebateEvent>;

export interface ExchangeReclaimEventObject {
  account: string;
  currencyKey: string;
  amount: BigNumber;
}
export type ExchangeReclaimEvent = TypedEvent<
  [string, string, BigNumber],
  ExchangeReclaimEventObject
>;

export type ExchangeReclaimEventFilter = TypedEventFilter<ExchangeReclaimEvent>;

export interface ExchangeTrackingEventObject {
  trackingCode: string;
  toCurrencyKey: string;
  toAmount: BigNumber;
  fee: BigNumber;
}
export type ExchangeTrackingEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  ExchangeTrackingEventObject
>;

export type ExchangeTrackingEventFilter = TypedEventFilter<ExchangeTrackingEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface ProxyUpdatedEventObject {
  proxyAddress: string;
}
export type ProxyUpdatedEvent = TypedEvent<[string], ProxyUpdatedEventObject>;

export type ProxyUpdatedEventFilter = TypedEventFilter<ProxyUpdatedEvent>;

export interface SynthExchangeEventObject {
  account: string;
  fromCurrencyKey: string;
  fromAmount: BigNumber;
  toCurrencyKey: string;
  toAmount: BigNumber;
  toAddress: string;
}
export type SynthExchangeEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber, string],
  SynthExchangeEventObject
>;

export type SynthExchangeEventFilter = TypedEventFilter<SynthExchangeEvent>;

export interface TokenStateUpdatedEventObject {
  newTokenState: string;
}
export type TokenStateUpdatedEvent = TypedEvent<[string], TokenStateUpdatedEventObject>;

export type TokenStateUpdatedEventFilter = TypedEventFilter<TokenStateUpdatedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Synthetix extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SynthetixInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;

    DECIMALS(overrides?: CallOverrides): Promise<[number]>;

    TOKEN_NAME(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_SYMBOL(overrides?: CallOverrides): Promise<[string]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    anySynthOrSNXRateIsInvalid(
      overrides?: CallOverrides
    ): Promise<[boolean] & { anyRateInvalid: boolean }>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<[string[]]>;

    availableSynthCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    availableSynths(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burnSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnSynths(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnSynthsOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnSynthsToTarget(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collateral(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    collateralisationRatio(
      _issuer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    debtBalanceOf(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    emitAtomicSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emitExchangeRebate(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emitExchangeReclaim(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emitExchangeTracking(
      trackingCode: PromiseOrValue<BytesLike>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emitSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeAtomically(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeWithTracking(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeWithVirtual(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFirstNonZeroEscrowIndex(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    isWaitingPeriod(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    issueMaxSynths(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issueMaxSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issueSynths(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issueSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateDelinquentAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateDelinquentAccountEscrowIndex(
      account: PromiseOrValue<string>,
      escrowStartIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateSelf(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxIssuable: BigNumber }>;

    messageSender(overrides?: CallOverrides): Promise<[string]>;

    migrateEscrowBalanceToRewardEscrowV2(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    migrateEscrowContractBalance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    mintSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintSecondaryRewards(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxy(overrides?: CallOverrides): Promise<[string]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remainingIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        maxIssuable: BigNumber;
        alreadyIssued: BigNumber;
        totalSystemDebt: BigNumber;
      }
    >;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    sUSD(overrides?: CallOverrides): Promise<[string]>;

    setMessageSender(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProxy(
      _proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokenState(
      _tokenState: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    synths(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    synthsByAddress(
      synthAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenState(overrides?: CallOverrides): Promise<[string]>;

    totalIssuedSynths(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalIssuedSynthsExcludeOtherCollateral(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferableSynthetix(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { transferable: BigNumber }>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  DECIMALS(overrides?: CallOverrides): Promise<number>;

  TOKEN_NAME(overrides?: CallOverrides): Promise<string>;

  TOKEN_SYMBOL(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<boolean>;

  approve(
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  availableCurrencyKeys(overrides?: CallOverrides): Promise<string[]>;

  availableSynthCount(overrides?: CallOverrides): Promise<BigNumber>;

  availableSynths(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burnSecondary(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnSynths(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnSynthsOnBehalf(
    burnForAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnSynthsToTarget(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnSynthsToTargetOnBehalf(
    burnForAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collateral(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  collateralisationRatio(
    _issuer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  debtBalanceOf(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  emitAtomicSynthExchange(
    account: PromiseOrValue<string>,
    fromCurrencyKey: PromiseOrValue<BytesLike>,
    fromAmount: PromiseOrValue<BigNumberish>,
    toCurrencyKey: PromiseOrValue<BytesLike>,
    toAmount: PromiseOrValue<BigNumberish>,
    toAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emitExchangeRebate(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emitExchangeReclaim(
    account: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emitExchangeTracking(
    trackingCode: PromiseOrValue<BytesLike>,
    toCurrencyKey: PromiseOrValue<BytesLike>,
    toAmount: PromiseOrValue<BigNumberish>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emitSynthExchange(
    account: PromiseOrValue<string>,
    fromCurrencyKey: PromiseOrValue<BytesLike>,
    fromAmount: PromiseOrValue<BigNumberish>,
    toCurrencyKey: PromiseOrValue<BytesLike>,
    toAmount: PromiseOrValue<BigNumberish>,
    toAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchange(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeAtomically(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    trackingCode: PromiseOrValue<BytesLike>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeOnBehalf(
    exchangeForAddress: PromiseOrValue<string>,
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeOnBehalfWithTracking(
    exchangeForAddress: PromiseOrValue<string>,
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    rewardAddress: PromiseOrValue<string>,
    trackingCode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeWithTracking(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    rewardAddress: PromiseOrValue<string>,
    trackingCode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeWithTrackingForInitiator(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    rewardAddress: PromiseOrValue<string>,
    trackingCode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeWithVirtual(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    trackingCode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFirstNonZeroEscrowIndex(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  isWaitingPeriod(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  issueMaxSynths(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issueMaxSynthsOnBehalf(
    issueForAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issueSynths(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issueSynthsOnBehalf(
    issueForAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateDelinquentAccount(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateDelinquentAccountEscrowIndex(
    account: PromiseOrValue<string>,
    escrowStartIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateSelf(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxIssuableSynths(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  messageSender(overrides?: CallOverrides): Promise<string>;

  migrateEscrowBalanceToRewardEscrowV2(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  migrateEscrowContractBalance(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  mintSecondary(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintSecondaryRewards(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxy(overrides?: CallOverrides): Promise<string>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remainingIssuableSynths(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      maxIssuable: BigNumber;
      alreadyIssued: BigNumber;
      totalSystemDebt: BigNumber;
    }
  >;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  sUSD(overrides?: CallOverrides): Promise<string>;

  setMessageSender(
    sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProxy(
    _proxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokenState(
    _tokenState: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  synths(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  synthsByAddress(synthAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  tokenState(overrides?: CallOverrides): Promise<string>;

  totalIssuedSynths(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalIssuedSynthsExcludeOtherCollateral(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferableSynthetix(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    DECIMALS(overrides?: CallOverrides): Promise<number>;

    TOKEN_NAME(overrides?: CallOverrides): Promise<string>;

    TOKEN_SYMBOL(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<boolean>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<string[]>;

    availableSynthCount(overrides?: CallOverrides): Promise<BigNumber>;

    availableSynths(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    burnSynths(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    burnSynthsOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    burnSynthsToTarget(overrides?: CallOverrides): Promise<void>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    collateral(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    collateralisationRatio(
      _issuer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtBalanceOf(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    emitAtomicSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    emitExchangeRebate(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    emitExchangeReclaim(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    emitExchangeTracking(
      trackingCode: PromiseOrValue<BytesLike>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    emitSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeAtomically(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeWithTracking(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeWithVirtual(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { amountReceived: BigNumber; vSynth: string }>;

    getFirstNonZeroEscrowIndex(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    isWaitingPeriod(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    issueMaxSynths(overrides?: CallOverrides): Promise<void>;

    issueMaxSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    issueSynths(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    issueSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateDelinquentAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidateDelinquentAccountEscrowIndex(
      account: PromiseOrValue<string>,
      escrowStartIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidateSelf(overrides?: CallOverrides): Promise<boolean>;

    maxIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageSender(overrides?: CallOverrides): Promise<string>;

    migrateEscrowBalanceToRewardEscrowV2(overrides?: CallOverrides): Promise<void>;

    migrateEscrowContractBalance(overrides?: CallOverrides): Promise<void>;

    mint(overrides?: CallOverrides): Promise<boolean>;

    mintSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintSecondaryRewards(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxy(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    remainingIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        maxIssuable: BigNumber;
        alreadyIssued: BigNumber;
        totalSystemDebt: BigNumber;
      }
    >;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    sUSD(overrides?: CallOverrides): Promise<string>;

    setMessageSender(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setProxy(_proxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setTokenState(_tokenState: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    settle(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        reclaimed: BigNumber;
        refunded: BigNumber;
        numEntriesSettled: BigNumber;
      }
    >;

    symbol(overrides?: CallOverrides): Promise<string>;

    synths(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    synthsByAddress(
      synthAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenState(overrides?: CallOverrides): Promise<string>;

    totalIssuedSynths(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalIssuedSynthsExcludeOtherCollateral(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferableSynthetix(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    'AccountLiquidated(address,uint256,uint256,address)'(
      account?: PromiseOrValue<string> | null,
      snxRedeemed?: null,
      amountLiquidated?: null,
      liquidator?: null
    ): AccountLiquidatedEventFilter;
    AccountLiquidated(
      account?: PromiseOrValue<string> | null,
      snxRedeemed?: null,
      amountLiquidated?: null,
      liquidator?: null
    ): AccountLiquidatedEventFilter;

    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    'AtomicSynthExchange(address,bytes32,uint256,bytes32,uint256,address)'(
      account?: PromiseOrValue<string> | null,
      fromCurrencyKey?: null,
      fromAmount?: null,
      toCurrencyKey?: null,
      toAmount?: null,
      toAddress?: null
    ): AtomicSynthExchangeEventFilter;
    AtomicSynthExchange(
      account?: PromiseOrValue<string> | null,
      fromCurrencyKey?: null,
      fromAmount?: null,
      toCurrencyKey?: null,
      toAmount?: null,
      toAddress?: null
    ): AtomicSynthExchangeEventFilter;

    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'ExchangeRebate(address,bytes32,uint256)'(
      account?: PromiseOrValue<string> | null,
      currencyKey?: null,
      amount?: null
    ): ExchangeRebateEventFilter;
    ExchangeRebate(
      account?: PromiseOrValue<string> | null,
      currencyKey?: null,
      amount?: null
    ): ExchangeRebateEventFilter;

    'ExchangeReclaim(address,bytes32,uint256)'(
      account?: PromiseOrValue<string> | null,
      currencyKey?: null,
      amount?: null
    ): ExchangeReclaimEventFilter;
    ExchangeReclaim(
      account?: PromiseOrValue<string> | null,
      currencyKey?: null,
      amount?: null
    ): ExchangeReclaimEventFilter;

    'ExchangeTracking(bytes32,bytes32,uint256,uint256)'(
      trackingCode?: PromiseOrValue<BytesLike> | null,
      toCurrencyKey?: null,
      toAmount?: null,
      fee?: null
    ): ExchangeTrackingEventFilter;
    ExchangeTracking(
      trackingCode?: PromiseOrValue<BytesLike> | null,
      toCurrencyKey?: null,
      toAmount?: null,
      fee?: null
    ): ExchangeTrackingEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'ProxyUpdated(address)'(proxyAddress?: null): ProxyUpdatedEventFilter;
    ProxyUpdated(proxyAddress?: null): ProxyUpdatedEventFilter;

    'SynthExchange(address,bytes32,uint256,bytes32,uint256,address)'(
      account?: PromiseOrValue<string> | null,
      fromCurrencyKey?: null,
      fromAmount?: null,
      toCurrencyKey?: null,
      toAmount?: null,
      toAddress?: null
    ): SynthExchangeEventFilter;
    SynthExchange(
      account?: PromiseOrValue<string> | null,
      fromCurrencyKey?: null,
      fromAmount?: null,
      toCurrencyKey?: null,
      toAmount?: null,
      toAddress?: null
    ): SynthExchangeEventFilter;

    'TokenStateUpdated(address)'(newTokenState?: null): TokenStateUpdatedEventFilter;
    TokenStateUpdated(newTokenState?: null): TokenStateUpdatedEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_SYMBOL(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<BigNumber>;

    availableSynthCount(overrides?: CallOverrides): Promise<BigNumber>;

    availableSynths(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnSynths(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnSynthsOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnSynthsToTarget(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collateral(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    collateralisationRatio(
      _issuer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtBalanceOf(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    emitAtomicSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emitExchangeRebate(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emitExchangeReclaim(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emitExchangeTracking(
      trackingCode: PromiseOrValue<BytesLike>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emitSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeAtomically(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeWithTracking(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeWithVirtual(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFirstNonZeroEscrowIndex(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    isWaitingPeriod(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueMaxSynths(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    issueMaxSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    issueSynths(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    issueSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateDelinquentAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateDelinquentAccountEscrowIndex(
      account: PromiseOrValue<string>,
      escrowStartIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateSelf(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    maxIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageSender(overrides?: CallOverrides): Promise<BigNumber>;

    migrateEscrowBalanceToRewardEscrowV2(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    migrateEscrowContractBalance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    mintSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintSecondaryRewards(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxy(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    remainingIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    sUSD(overrides?: CallOverrides): Promise<BigNumber>;

    setMessageSender(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProxy(
      _proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokenState(
      _tokenState: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    synths(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    synthsByAddress(
      synthAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenState(overrides?: CallOverrides): Promise<BigNumber>;

    totalIssuedSynths(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalIssuedSynthsExcludeOtherCollateral(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferableSynthetix(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_SYMBOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    availableSynthCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    availableSynths(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnSynths(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnSynthsOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnSynthsToTarget(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collateral(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralisationRatio(
      _issuer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtBalanceOf(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emitAtomicSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emitExchangeRebate(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emitExchangeReclaim(
      account: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emitExchangeTracking(
      trackingCode: PromiseOrValue<BytesLike>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emitSynthExchange(
      account: PromiseOrValue<string>,
      fromCurrencyKey: PromiseOrValue<BytesLike>,
      fromAmount: PromiseOrValue<BigNumberish>,
      toCurrencyKey: PromiseOrValue<BytesLike>,
      toAmount: PromiseOrValue<BigNumberish>,
      toAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeAtomically(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeWithTracking(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      rewardAddress: PromiseOrValue<string>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeWithVirtual(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFirstNonZeroEscrowIndex(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isWaitingPeriod(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issueMaxSynths(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issueMaxSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issueSynths(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issueSynthsOnBehalf(
      issueForAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateDelinquentAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateDelinquentAccountEscrowIndex(
      account: PromiseOrValue<string>,
      escrowStartIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateSelf(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrateEscrowBalanceToRewardEscrowV2(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    migrateEscrowContractBalance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    mintSecondary(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintSecondaryRewards(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remainingIssuableSynths(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMessageSender(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProxy(
      _proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokenState(
      _tokenState: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    synths(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    synthsByAddress(
      synthAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalIssuedSynths(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalIssuedSynthsExcludeOtherCollateral(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferableSynthetix(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
