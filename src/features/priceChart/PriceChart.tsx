import React from 'react';

import { usePriceChart } from './hooks';

import { PriceLineChart } from './components';

const PriceChart = (): JSX.Element => {
  const { priceChartSeries } = usePriceChart();
  return <PriceLineChart chartData={priceChartSeries} />;
};

export default PriceChart;
