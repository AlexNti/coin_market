import { getCoinDetails } from '../services';
import React from 'react';
import { CoinDetails } from '../types';
import { useRouter } from 'src/hooks';

export type UseCoinDetailsReturn = {
  isCoinDetailsLoading: boolean;
  coinDetails: CoinDetails | undefined;
  coinsDetailsError: unknown;
};
const useCoinsMarkets = (): UseCoinDetailsReturn => {
  const { match } = useRouter();
  const {
    isLoading: isCoinDetailsLoading,
    data: coinDetails,
    error: coinsDetailsError
  } = getCoinDetails({ coinID: (match.params.coinID as string) || '' });

  return {
    isCoinDetailsLoading,
    coinDetails,
    coinsDetailsError
  };
};

export default useCoinsMarkets;
