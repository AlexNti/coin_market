import { useQuery, UseQueryResult } from 'react-query';
import { coinApi, GetCoinsMarketsParams, CoinApi } from '../api';
import { CoinItem, QUERY_KEYS } from '../types';

export const getCoinsMarkets = ({ page = 1 }: GetCoinsMarketsParams): UseQueryResult<CoinItem[]> =>
  useQuery([QUERY_KEYS.COINS_MARKETS, page], () => coinApi.getCoinsMarkets({ page }));
