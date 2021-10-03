import { MakeApi } from 'src/types';
import { APIPaths, CoinDetails } from '../types';

export type GetCoinDetailsParams = {
  coinID?: string;
};

export type CoinDetailsApi = {
  getCoinDetails: ({ coinID }: GetCoinDetailsParams) => Promise<CoinDetails>;
};

const makeCoinDetailsApi = ({ httpService }: MakeApi): CoinDetailsApi => {
  const getCoinDetails = async ({ coinID }: GetCoinDetailsParams) => {
    const response = await httpService.GET(
      `${APIPaths.COIN_DETAILS}/${coinID}`,

      {
        'Content-Type': 'application/json'
      }
    );
    const coinDetails = response.data as CoinDetails;

    return coinDetails;
  };

  return { getCoinDetails };
};

export default makeCoinDetailsApi;
