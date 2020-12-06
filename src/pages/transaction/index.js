import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import s from './Transaction.module.scss';

export default function Transaction() {
  return (
    <ProductLayout activeNavigation="transaction">
      <Grid container alignItems="center" style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'center' }}>Transaction</div>
        </Grid>
      </Grid>
    </ProductLayout>
  );
}
