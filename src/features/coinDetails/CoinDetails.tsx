import React from 'react';

import { useCoinDetails } from './hooks';
import { DetailsPanel, Description } from './components';
import { Flex } from '@chakra-ui/react';
import PriceChart from 'src/features/priceChart/PriceChart';

const CoinDetails = (): JSX.Element => {
  const { coinDetails, isCoinDetailsLoading, coinsDetailsError } = useCoinDetails();

  return (
    <Flex flexDirection="column">
      <Flex>
        <Description description={coinDetails?.description.en || ''} />
        <DetailsPanel coinDetails={coinDetails} />
      </Flex>

      <PriceChart />
    </Flex>
  );
};

export default CoinDetails;
