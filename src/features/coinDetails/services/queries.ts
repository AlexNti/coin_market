import { useQuery, UseQueryResult } from 'react-query';
import { coinDetailsAPI, GetCoinDetailsParams } from '../api';
import { QUERY_KEYS, CoinDetails } from '../types';

export const getCoinDetails = ({ coinID }: GetCoinDetailsParams): UseQueryResult<CoinDetails> =>
  useQuery([QUERY_KEYS.COIN_DETAILS, coinID], () => coinDetailsAPI.getCoinDetails({ coinID }));
