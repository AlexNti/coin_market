import React from 'react';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';
import { UsePriceChartReturn } from '../../hooks';

type DayRangeProps = Pick<UsePriceChartReturn, 'days' | 'handleChageDays'>;

const DayRange = ({ handleChageDays, days }: DayRangeProps) => {
  return (
    <RadioGroup defaultValue={days}>
      <Stack onChange={handleChageDays} spacing={4} direction="row">
        <Radio value="1">1 day</Radio>
        <Radio value="14">14 days</Radio>
        <Radio value="30">30 days</Radio>
        <Radio value="90">3 months</Radio>
        <Radio value="365">1 year</Radio>
        <Radio value="max">Max</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default React.memo(DayRange);
