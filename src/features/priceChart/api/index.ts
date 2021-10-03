import { axiosHttpService } from 'src/utils/httpService';
import makeCoinChart from './api';
export * from './api';

const httpService = axiosHttpService();

const coinChartAPI = makeCoinChart({ httpService });

export { coinChartAPI };
