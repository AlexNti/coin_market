import { getCoinsMarkets } from '../services';
import React from 'react';
import { CoinItem } from 'src/features/coinMarket/types';

export type UseCoinsMarketsReturn = {
  isLoading: boolean;
  coins: CoinItem[] | undefined;
  coinsError: unknown;
  page: number;
  handleSelectCoin: (coinId: string) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};
const useCoinsMarkets = (): UseCoinsMarketsReturn => {
  const [page, setCurrentPage] = React.useState(1);
  const { isLoading, data: coins, error: coinsError } = getCoinsMarkets({ page });

  const handleSelectCoin = React.useCallback((coinId: string) => {
    console.log(coinId);
  }, []);

  const handleNextPage = React.useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  const handlePreviousPage = React.useCallback(() => {
    if (page > 1) setCurrentPage((currentPage) => currentPage - 1);
  }, [page]);

  return {
    isLoading,
    coins,
    coinsError,
    page,
    handleSelectCoin,
    handlePreviousPage,
    handleNextPage
  };
};

export default useCoinsMarkets;
