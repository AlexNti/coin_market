import React from 'react';

import { useCoinDetails } from './hooks';
import { DetailsPanel } from './components';

const CoinDetails = (): JSX.Element => {
  const { coinDetails, isCoinDetailsLoading, coinsDetailsError } = useCoinDetails();

  return <DetailsPanel coinDetails={coinDetails} />;
};

export default CoinDetails;
