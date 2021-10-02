import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { coinApi, GetCoinsMarketsParams, CoinApi } from '../api';
import { QUERY_KEYS } from '../types';

export const getCoinsMarkets = ({
  page
}: GetCoinsMarketsParams): UseQueryResult<CoinApi['getCoinsMarkets']> =>
  useQuery([QUERY_KEYS.COINS_MARKETS], () => coinApi.getCoinsMarkets({ page }));
