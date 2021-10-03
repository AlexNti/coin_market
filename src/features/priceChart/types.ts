import { Serie } from '@nivo/line';
import { TIME_PRECISION } from '@nivo/scales';

export enum APIPaths {
  PRICE_CHART = 'market_chart',
  COINS = 'coins'
}

export enum QUERY_KEYS {
  PRICE_CHART = 'PRICE_CHART'
}

export type PriceChart = Array<{ x: string; y: string }>;
export type PriceChartSeries = Serie[];
export type AxisConfig = {
  axisBottom: string;
  precision: TIME_PRECISION;
  tickValues: string;
};
