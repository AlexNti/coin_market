import { getCoinDetails } from '../services';
import React from 'react';
import { CoinDetails } from '../types';
import { useRouter } from 'src/hooks';

export type UseCoinDetailsReturn = {
  isCoinDetailsLoading: boolean;
  coinDetails: CoinDetails | undefined;
  coinsDetailsError: unknown;
  handleGoToMainPage: () => void;
};
const useCoinsMarkets = (): UseCoinDetailsReturn => {
  const { match, history } = useRouter();
  const {
    isLoading: isCoinDetailsLoading,
    data: coinDetails,
    error: coinsDetailsError
  } = getCoinDetails({ coinID: (match.params.coinID as string) || '' });

  const handleGoToMainPage = React.useCallback(() => {
    history.push('/');
  }, [history]);

  return {
    isCoinDetailsLoading,
    coinDetails,
    coinsDetailsError,
    handleGoToMainPage
  };
};

export default useCoinsMarkets;
