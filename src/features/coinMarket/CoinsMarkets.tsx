import React from 'react';

import { Table } from './components/Table';
import { Box } from '@chakra-ui/react';

import { useCoinsMarkets } from './hooks';

const CoinsMarkets = (): JSX.Element => {
  const { coins, isLoading, coinsError, handleSelectCoin } = useCoinsMarkets();

  return (
    <Box w="100%" p={4} color="white">
      <Table coins={coins || []} handleSelectCoin={handleSelectCoin}></Table>
    </Box>
  );
};

export default CoinsMarkets;
