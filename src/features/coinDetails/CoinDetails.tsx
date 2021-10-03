import React from 'react';

import { useCoinDetails } from './hooks';
import { DetailsPanel, Description } from './components';
import { Flex, Box } from '@chakra-ui/react';
import PriceChart from 'src/features/priceChart/PriceChart';

const CoinDetails = (): JSX.Element => {
  const { coinDetails, isCoinDetailsLoading, coinsDetailsError } = useCoinDetails();

  return (
    <Flex flexDirection="row">
      <Flex pr={3} flex={1} flexDirection="column">
        <Description description={coinDetails?.description.en || ''} />
        <Box pt={3} height={650}>
          <PriceChart />
        </Box>
      </Flex>
      <DetailsPanel coinDetails={coinDetails} />
    </Flex>
  );
};

export default CoinDetails;
