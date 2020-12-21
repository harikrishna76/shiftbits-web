import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import AccountDetails from './AccountDetails';
import KYCVerification from './KYCVerification';
import BankDetails from './BankDetails';
import s from './MyAccount.module.scss';

export default function SpacingGrid() {
  return (
    <ProductLayout activeNavigation="account">
      <div className="flexColumn flex1">
        <Grid container className="flexGrow1">
          <AccountDetails />
          <KYCVerification />
          <BankDetails />
        </Grid>
        <div className={`${s.statusSection} flex`}>
          <div className={s.statusIndicator}>
            <div className={s.statusLine} />
            <div className={s.activeLine} style={{ width: '50%' }} />
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
