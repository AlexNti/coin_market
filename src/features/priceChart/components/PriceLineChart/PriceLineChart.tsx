import React from 'react';

import { ResponsiveLine } from '@nivo/line';
import { PriceChartSeries } from '../../types';

type PriceLineChartProps = {
  chartData: PriceChartSeries;
};

const PriceLineChart = ({ chartData }: PriceLineChartProps): JSX.Element => {
  return <ResponsiveLine data={chartData} />;
};

export default PriceLineChart;
