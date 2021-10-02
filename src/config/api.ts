const isProduction = process.env.APP_ENV === 'production';

const devApiConfig = {
  baseUrl: process.env.BASE_URL_DEV
};

const prodApiConfig = {
  baseUrl: process.env.BASE_URL_PROD
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
