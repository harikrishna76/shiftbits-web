import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import s from './MyAccount.module.scss';

export default function SpacingGrid() {
  return (
    <ProductLayout activeNavigation="account">
      <Grid container alignItems="center" style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/conversation.png"
              className={s.chatBoxImg}
              alt=""
            />
          </div>
        </Grid>
      </Grid>
    </ProductLayout>
  );
}
