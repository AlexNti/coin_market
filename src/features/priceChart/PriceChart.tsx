import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

import { usePriceChart } from './hooks';

import { PriceLineChart, DayRange } from './components';

const PriceChart = (): JSX.Element => {
  const { priceChartSeries, handleChageDays, isPriceChartLoading, days, axisConfig } =
    usePriceChart();

  if (isPriceChartLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  return (
    <Flex alignItems={'center'} flexDirection="column" height="100%" width="100%">
      <PriceLineChart {...axisConfig} chartData={priceChartSeries} />
      <DayRange handleChageDays={handleChageDays} days={days}></DayRange>
    </Flex>
  );
};

export default PriceChart;
