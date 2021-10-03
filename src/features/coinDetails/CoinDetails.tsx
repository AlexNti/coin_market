import React from 'react';

import { useCoinDetails } from './hooks';
import { DetailsPanel, Description } from './components';
import { Flex, Box, Spinner, IconButton } from '@chakra-ui/react';
import PriceChart from 'src/features/priceChart/PriceChart';
import { NotFound404 } from 'src/components';
import { ArrowBackIcon } from '@chakra-ui/icons';

const CoinDetails = (): JSX.Element => {
  const { coinDetails, isCoinDetailsLoading, coinsDetailsError, handleGoToMainPage } =
    useCoinDetails();

  if (isCoinDetailsLoading) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );
  }

  if (coinsDetailsError) {
    return <NotFound404 />;
  }
  return (
    <Flex flexDirection="row">
      <Flex pr={3} flex={1} flexDirection="column">
        <IconButton
          width={50}
          onClick={handleGoToMainPage}
          aria-label="Go to main"
          size="lg"
          icon={<ArrowBackIcon />}
        />
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
