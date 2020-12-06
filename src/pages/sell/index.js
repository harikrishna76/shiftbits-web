import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import s from './Sell.module.scss';

export default function Sell() {
  return (
    <ProductLayout activeNavigation="sell">
      <Grid container alignItems="center" style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'center' }}>Sell</div>
        </Grid>
      </Grid>
    </ProductLayout>
  );
}
