import { DEFAULT_CURRENCY, NUMBER_OF_ITEMS_PER_PAGE } from 'src/constants';
import { MakeApi } from 'src/types';
import { APIPaths, CoinItem } from '../types';

export type GetCoinsMarketsParams = {
  page?: number;
};
export type CoinApi = {
  getCoinsMarkets: ({ page }: GetCoinsMarketsParams) => Promise<CoinItem[]>;
};

const makeCoinMarketApi = ({ httpService }: MakeApi): CoinApi => {
  const getCoinsMarkets = async ({ page }: GetCoinsMarketsParams) => {
    const response = await httpService.GET(
      `${APIPaths.COINS_MARKETS}`,
      { vs_currency: DEFAULT_CURRENCY, per_page: NUMBER_OF_ITEMS_PER_PAGE, page },
      {
        'Content-Type': 'application/json'
      }
    );
    const coins = response.data as CoinItem[];

    return coins;
  };

  return { getCoinsMarkets };
};

export default makeCoinMarketApi;
