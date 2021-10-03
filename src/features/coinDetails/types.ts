export enum APIPaths {
  COIN_DETAILS = 'coins'
}

export enum QUERY_KEYS {
  COIN_DETAILS = 'COIN_DETAILS'
}

export type CoinDetails = {
  name: string;
  symbol: string;
  image: {
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    ath_date: {
      usd: Date;
    };
    atl_date: {
      usd: Date;
    };
  };
  description: {
    en: string;
  };
  links: { [index: string]: Record<string, Array<string>> };
  community_data: { facebook_likes: number; twitter_followers: number; reddit_subscribers: number };
  developer_data: { forks: number; stars: number; subscribers: number; total_issues: number };
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
};
