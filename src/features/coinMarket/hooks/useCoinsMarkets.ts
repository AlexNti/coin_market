import { getCoinsMarkets } from '../services';
import React from 'react';
import { CoinItem } from 'src/features/coinMarket/types';

export type UseCoinsMarketsReturn = {
  isLoading: boolean;
  coins: CoinItem[] | undefined;
  coinsError: unknown;
  page: number;
  handleSelectCoin: (coinId: string) => void;
};
const useCoinsMarkets = (): UseCoinsMarketsReturn => {
  const [page, setCurrentPage] = React.useState(1);
  const { isLoading, data: coins, error: coinsError } = getCoinsMarkets({ page });

  const handleSelectCoin = React.useCallback((coinId: string) => {
    console.log(coinId);
  }, []);

  return { isLoading, coins, coinsError, page, handleSelectCoin };
};

export default useCoinsMarkets;
