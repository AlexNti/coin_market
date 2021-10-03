import React from 'react';

import { useCoinDetails } from './hooks';
import { DetailsPanel, Description } from './components';
import { Flex, Text } from '@chakra-ui/react';

const CoinDetails = (): JSX.Element => {
  const { coinDetails, isCoinDetailsLoading, coinsDetailsError } = useCoinDetails();

  return (
    <Flex>
      <Description description={coinDetails?.description.en || ''} />
      <DetailsPanel coinDetails={coinDetails} />;
    </Flex>
  );
};

export default CoinDetails;
