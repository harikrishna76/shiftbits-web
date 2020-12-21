import React from 'react';
import { Grid } from '@material-ui/core';
import s from './IdentityVerification.module.scss';

export default function IdentityVerification() {
  return (
    <Grid
      item
      xs={12}
      lg={7}
      justify="flex-end"
      className={s.identityVerificationCard}
    >
      <img src="images/identity_verification.svg" alt="" />
      <div className="fontWeightBold fontSize24">
        Complete Identity Verification
      </div>
      <div className="greyText">
        Please complete the identity verification as we need some additional
        information to authenticate your account.
      </div>
      <div className={`${s.submitButton} center`}>
        <div className="fontWeightBold">Submit</div>
      </div>
    </Grid>
  );
}
