import React from 'react';
import { Grid } from '@material-ui/core';
import FormFields from 'components/form-fields';
import { kycFields } from 'constants/myAccount';
import s from './MyAccount.module.scss';

export default function KYCVerification() {
  const formKey = 'KYCVerification';

  return (
    <Grid item xs={12} md={4} className={s.section}>
      <div className={s.sectionTitle}>KYC Verification</div>
      <div className={s.sectionFields}>
        <div className={`alignCenter spaceBetween ${s.picture}`}>
          <img src="/images/Group%20569.png" height="62" alt="" />
          <div style={{ width: '60%' }}>
            <FormFields
              fieldDetails={kycFields.picture}
              formKey={formKey}
              className={s.pictureField}
            />
          </div>
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <FormFields fieldDetails={kycFields.verificationType} />
        </div>
        <div className={s.documentsUpload}>
          <div className="fieldLabel">Driver's license</div>
          <div className="spaceBetween">
            <FormFields
              fieldDetails={kycFields.documents[0]}
              className={s.front}
            />
            <FormFields
              fieldDetails={kycFields.documents[1]}
              className={s.back}
            />
          </div>
        </div>
      </div>
    </Grid>
  );
}
