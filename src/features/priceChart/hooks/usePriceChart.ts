import React from 'react';
import { useRouter } from 'src/hooks';
import { PriceChartSeries } from '../types';
import { getPriceChart } from '../services';

export type UsePriceChartReturn = {
  isPriceChartLoading: boolean;
  priceChartSeries: PriceChartSeries;
  priceChartError: unknown;
  handleChageDays: (numberOfDays: number) => void;
};
const usePriceChart = (): UsePriceChartReturn => {
  const { match } = useRouter();
  const [days, setDay] = React.useState(1);
  const [priceChartSeries, setPriceChartSeries] = React.useState<PriceChartSeries>([]);
  const {
    isLoading: isPriceChartLoading,
    data: priceChartData,
    error: priceChartError
  } = getPriceChart({ coinID: (match.params.coinID as string) || '', days });

  const handleChageDays = React.useCallback((numberOfDays: number) => {
    setDay(numberOfDays);
  }, []);

  React.useEffect(() => {
    if (priceChartData) {
      setPriceChartSeries([{ id: `${days}`, data: priceChartData, color: 'hsl(139, 70%, 50%)' }]);
    }
  }, [priceChartData]);

  return {
    handleChageDays,
    isPriceChartLoading,
    priceChartSeries,
    priceChartError
  };
};

export default usePriceChart;
