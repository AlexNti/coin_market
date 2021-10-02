export interface HttpService {
  POST: (url: string, data?: any, params?: any, headers?: any) => Promise<any>;
  GET: (url: string, params?: any, headers?: any) => Promise<any>;
}

export type MakeApi = {
  httpService: HttpService;
};
