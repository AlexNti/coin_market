import axios, { AxiosInstance } from 'axios';

import { HttpService } from 'src/types';
import { apiConfig } from 'src/config';

const axiosHttpService = (): HttpService => {
  const axiosInstance: AxiosInstance = axios.create({});

  async function POST(url: string, data?: any, params?: any, headers?: any): Promise<any> {
    return axiosInstance({
      method: 'POST',
      url: `${apiConfig.baseUrl}${url}`,
      data: data ? data : null,
      params: params ? params : null,
      headers: headers ? headers : null
    });
  }

  async function GET(url: string, params?: any, headers?: any): Promise<any> {
    return axiosInstance({
      method: 'GET',
      url: `${apiConfig.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null
    });
  }
  return { POST, GET };
};

export default axiosHttpService;
