const isProduction = process.env.REACT_APP_APP_ENV === 'production';

const devApiConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL_DEV
};

const prodApiConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL_PROD
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
