import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import CurrencyGraph from 'components/currency-graph';
import IdentityVerification from 'components/identity-verification';
import BuyAndSellTransaction from './transaction';

export default function BuyAndSell({ activePage = 'buy' }) {
  const [activeCrypto, setActiveCrypto] = useState('bitcoin');

  const [activeCurrency, setActiveCurrency] = useState('INR');

  return (
    <ProductLayout activeNavigation={activePage}>
      <Grid container className="pagePadding">
        <Grid item xs={12} md={6}>
          <BuyAndSellTransaction
            activeCrypto={activeCrypto}
            setActiveCrypto={setActiveCrypto}
            activePage={activePage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CurrencyGraph
            activeCrypto={activeCrypto}
            activeCurrency={activeCurrency}
          />
          <Grid className="flex" justify="flex-end">
            <IdentityVerification />
          </Grid>
        </Grid>
      </Grid>
    </ProductLayout>
  );
}
