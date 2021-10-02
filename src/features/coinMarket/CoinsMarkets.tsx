import React from 'react';

import { Table } from './components/Table';
import { Flex } from '@chakra-ui/react';

import { useCoinsMarkets } from './hooks';
import { Pagination } from 'src/features/coinMarket/components/Pagination';

const CoinsMarkets = (): JSX.Element => {
  const {
    coins,
    isLoading,
    coinsError,
    handleSelectCoin,
    page,
    handleNextPage,
    handlePreviousPage
  } = useCoinsMarkets();

  return (
    <Flex alignItems="center" flexDirection="column" w="100%" p={4} color="white">
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        page={page}
      ></Pagination>
      <Table coins={coins || []} handleSelectCoin={handleSelectCoin}></Table>
    </Flex>
  );
};

export default CoinsMarkets;
