import { Serie } from '@nivo/line';

export enum APIPaths {
  PRICE_CHART = 'market_chart',
  COINS = 'coins'
}

export enum QUERY_KEYS {
  PRICE_CHART = 'PRICE_CHART'
}

export type PriceChart = Array<{ x: string; y: string }>;
export type PriceChartSeries = Serie[];
