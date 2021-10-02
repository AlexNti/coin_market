import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'src/components';

import CoinsMarkets from 'src/features/coinMarket/CoinsMarkets';

const Routes = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        {/* <Route exact path="/coin-details" component={AddProductPage} /> */}
        <Route exact path="/" component={CoinsMarkets} />
      </Switch>
    </Layout>
  );
};

export default Routes;
