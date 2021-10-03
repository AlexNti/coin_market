import React from 'react';
import { useRouter } from 'src/hooks';
import { PriceChartSeries, AxisConfig } from '../types';
import { getPriceChart } from '../services';

export type UsePriceChartReturn = {
  isPriceChartLoading: boolean;
  priceChartSeries: PriceChartSeries;
  priceChartError: unknown;
  handleChageDays: (event: React.ChangeEvent<HTMLInputElement>) => void;
  days: string;
  axisConfig: AxisConfig;
};

const axisConfigMapper = (): Record<string, AxisConfig> => ({
  '1': { axisBottom: '%H:%M', precision: 'minute', tickValues: 'every 60 minutes' },
  '14': { axisBottom: '%Y-%m-%d', precision: 'minute', tickValues: 'every 1 day' },
  '30': { axisBottom: '%Y-%m-%d', precision: 'minute', tickValues: 'every 2 days' },
  '90': { axisBottom: '%Y-%m-%d', precision: 'minute', tickValues: 'every 7 days' },
  '365': { axisBottom: '%Y-%m-%d', precision: 'minute', tickValues: 'every 1 month' },
  max: { axisBottom: '%Y-%m-%d', precision: 'minute', tickValues: 'every 6 months' }
});
const usePriceChart = (): UsePriceChartReturn => {
  const { match } = useRouter();
  const [days, setDay] = React.useState<string>('1');
  const [priceChartSeries, setPriceChartSeries] = React.useState<PriceChartSeries>([]);
  const [axisConfig, setAxisConfig] = React.useState(axisConfigMapper()['1']);

  const {
    isLoading: isPriceChartLoading,
    data: priceChartData,
    error: priceChartError
  } = getPriceChart({ coinID: (match.params.coinID as string) || '', days });

  const handleChageDays = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
  }, []);

  React.useEffect(() => {
    if (priceChartData) {
      setPriceChartSeries([{ id: `${days}`, data: priceChartData, color: 'hsl(139, 70%, 50%)' }]);
    }
  }, [priceChartData]);

  React.useEffect(() => {
    setAxisConfig(axisConfigMapper()[days]);
  }, [days]);

  return {
    handleChageDays,
    isPriceChartLoading,
    priceChartSeries,
    priceChartError,
    days,
    axisConfig
  };
};

export default usePriceChart;
