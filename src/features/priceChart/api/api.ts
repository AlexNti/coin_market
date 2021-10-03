import { MakeApi } from 'src/types';
import { APIPaths, PriceChart } from '../types';
import { DEFAULT_CURRENCY } from 'src/constants';

import moment from 'moment';

export type GetPriceChartParams = {
  coinID: string;

  days: number;
};

export type CoinChartAPI = {
  getPriceChart: ({ coinID, days }: GetPriceChartParams) => Promise<PriceChart>;
};

const makeCoinChartAPI = ({ httpService }: MakeApi): CoinChartAPI => {
  const getPriceChart = async ({ coinID, days }: GetPriceChartParams) => {
    const response = await httpService.GET(
      `${APIPaths.COINS}/${coinID}/${APIPaths.PRICE_CHART}`,
      { vs_currency: DEFAULT_CURRENCY, days: days },
      {
        'Content-Type': 'application/json'
      }
    );

    const transformedPriceChart = response.data.prices.map((prices: Array<Array<string>>) => {
      return { x: moment.parseZone(prices[0]).utc().format(), y: prices[1] };
    });
    const coinDetails = transformedPriceChart as PriceChart;

    return coinDetails;
  };

  return { getPriceChart };
};

export default makeCoinChartAPI;
