export const paneItemDataMapper = (): Array<{
  title: string;
  path: string;
  defaultValue: number | string;
  func?: () => any;
}> => [
  { title: 'Current Price', path: 'market_data.current_price.usd', defaultValue: '' },
  { title: 'Twitter Followers', path: 'community_data.twitter_followers', defaultValue: 0 },
  { title: 'GitHub Stars', path: 'developer_data.stars', defaultValue: 0 },
  { title: 'FB Likes', path: 'community_data.facebook_likes', defaultValue: 0 },
  { title: 'Up Votes', path: 'sentiment_votes_up_percentage', defaultValue: 0 },
  { title: 'Down Votes', path: 'sentiment_votes_down_percentage', defaultValue: 0 },
  { title: 'GitHub Forks', path: 'developer_data.forks', defaultValue: '' },
  { title: 'Price Change 24h', path: 'market_data.price_change_24h', defaultValue: 0 },
  {
    title: 'Price Change 7 days',
    path: 'market_data.price_change_percentage_7d',
    defaultValue: 0
  },
  {
    title: 'Price Change 14 days',
    path: 'market_data.price_change_percentage_14d',
    defaultValue: 0
  },
  {
    title: 'Price Change 1 month',
    path: 'market_data.price_change_percentage_30d',
    defaultValue: 0
  },
  {
    title: 'Price Change 2 months',
    path: 'market_data.price_change_percentage_60d',
    defaultValue: 0
  },
  { title: 'Price Change 1 year', path: 'market_data.price_change_percentage_1y', defaultValue: 0 },
  {
    title: 'Higest Price 24h',
    path: 'market_data.high_24h.usd',
    defaultValue: 0
  },
  {
    title: 'Lowest Price 24h',
    path: 'market_data.low_24h.usd',
    defaultValue: 0
  },
  {
    title: 'Price Change 200 days',
    path: 'market_data.price_change_percentage_200d',
    defaultValue: 0
  }
];
