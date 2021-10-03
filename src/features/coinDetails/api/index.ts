import { axiosHttpService } from 'src/utils/httpService';
import makeCoinDetails from './api';
export * from './api';

const httpService = axiosHttpService();

const coinDetailsAPI = makeCoinDetails({ httpService });

export { coinDetailsAPI };
