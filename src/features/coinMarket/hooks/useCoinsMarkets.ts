import { getCoinsMarkets } from '../services';
import React from 'react';
import { CoinItem } from 'src/features/coinMarket/types';
import { useRouter } from 'src/hooks';

import storage from 'src/utils/storage';
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
  const { history } = useRouter();
  const [page, setCurrentPage] = React.useState(storage.session.read('page') || 1);
  const { isLoading, data: coins, error: coinsError } = getCoinsMarkets({ page });

  const handleSelectCoin = React.useCallback(
    (coinId: string) => {
      history.push(`coin-details/${coinId}`);
    },
    [page]
  );

  const handleNextPage = React.useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  const handlePreviousPage = React.useCallback(() => {
    if (page > 1) setCurrentPage((currentPage) => currentPage - 1);
  }, [page]);

  /**
   * Save page session to storage when so when we navigate back from coins-details
   * we will continue from the page the we were previously.
   *
   */
  React.useEffect(() => {
    storage.session.write('page', page);
  }, [page]);

  /**
   * Clear the session storage when we are refreshing the browser.
   */
  React.useEffect(() => {
    window.onbeforeunload = () => {
      storage.session.clear();
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

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
