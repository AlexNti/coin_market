import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'src/components';

import CoinsMarkets from 'src/features/coinMarket/CoinsMarkets';
import CoinDetails from 'src/features/coinDetails/CoinDetails';

import { NotFound404 } from 'src/components';

const Routes = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route path="/coin-details/:coinID" component={CoinDetails} />
        <Route exact path="/" component={CoinsMarkets} />
        <Route component={NotFound404}></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;
