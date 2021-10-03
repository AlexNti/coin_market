import { getCoinsMarkets } from '../services';
import React from 'react';
import { CoinItem } from 'src/features/coinMarket/types';
import { useRouter } from 'src/hooks';

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
  const { history, location } = useRouter();
  const [page, setCurrentPage] = React.useState((location?.state?.page as number) || 1);
  const { isLoading, data: coins, error: coinsError } = getCoinsMarkets({ page });

  /**
   * We use the state of history in order to memory save the current page that we are.
   * If you navigate to coins details and back to our main screen we will continue from
   * the page that we left earlier.
   */
  const handleSelectCoin = React.useCallback(
    (coinId: string) => {
      history.push(`coin-details/${coinId}`, { page });
    },
    [page]
  );

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
