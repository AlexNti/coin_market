import { axiosHttpService } from 'src/utils/httpService';
import makeCoinMarketApi from './api';
export * from './api';

const httpService = axiosHttpService();

const coinApi = makeCoinMarketApi({ httpService });

export { coinApi };
