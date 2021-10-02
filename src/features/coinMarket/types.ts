export enum APIPaths {
  COINS_MARKETS = 'coins/markets'
}

export enum QUERY_KEYS {
  COINS_MARKETS = 'COINS_MARKETS'
}

export type CoinItem = {
  symbol: string;
  name: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  id: string;
};
