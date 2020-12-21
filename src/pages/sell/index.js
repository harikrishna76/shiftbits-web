import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import BuyAndSell from 'components/buy-and-sell';
import CurrencyGraph from 'components/currency-graph';
import IdentityVerification from 'components/identity-verification';
import s from './Sell.module.scss';

export default function Sell() {
  const [activeTab, setActiveTab] = useState('bitcoin');

  const [activeCurrency, setActiveCurrency] = useState('INR');

  return (
    <ProductLayout activeNavigation="sell">
      <Grid container className="pagePadding">
        <Grid item xs={12} md={6}>
          <BuyAndSell activeTab={activeTab} transactionType="sell" />
        </Grid>
        <Grid item xs={12} md={6}>
          <CurrencyGraph
            activeTab={activeTab}
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
