import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import s from './Spends.module.scss';

export default function Spends() {
  return (
    <ProductLayout activeNavigation="spends">
      <Grid container alignItems="center" style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'center' }}>Spends</div>
        </Grid>
      </Grid>
    </ProductLayout>
  );
}
