import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NetworkChain } from '../../components/NetworkChain';
import { MultipleTransactionModal } from '../../components/shared/TransactionReview/MultipleTransactionModal';
import { Initializer } from '../../Initializer';
import Footer from './Footer';
import Header from './Header';

export const DefaultLayout: React.FC = () => (
  <Box
    as="main"
    background="black"
    minHeight="100vh"
    color="rgba(255,255,255,0.85)"
    display="flex"
    flexDirection="column"
  >
    <Flex flex="1" flexDirection="column">
      <NetworkChain>
        <Initializer>
          <Header />
          <Container display="flex" flexDir="column" maxW="2xl" flex="1">
            <Outlet />
          </Container>
          <MultipleTransactionModal />
        </Initializer>
      </NetworkChain>
    </Flex>
    <Footer />
  </Box>
);
