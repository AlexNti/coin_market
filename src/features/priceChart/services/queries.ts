import { useQuery, UseQueryResult } from 'react-query';
import { coinChartAPI, GetPriceChartParams } from '../api';
import { PriceChart, QUERY_KEYS } from '../types';

export const getPriceChart = ({ coinID, days }: GetPriceChartParams): UseQueryResult<PriceChart> =>
  useQuery([QUERY_KEYS.PRICE_CHART, coinID, days], () =>
    coinChartAPI.getPriceChart({ coinID, days })
  );
