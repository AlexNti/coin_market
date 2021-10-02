import React from 'react';

import { Table, Pagination } from './components';
import { Flex, Spinner } from '@chakra-ui/react';

import { useCoinsMarkets } from './hooks';

import { Alert } from 'src/components';

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

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  if (coinsError) {
    return (
      <Alert
        title="Error At fetching Coins Market"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }
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
