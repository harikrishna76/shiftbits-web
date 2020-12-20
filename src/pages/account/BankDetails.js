import React from 'react';
import { Grid } from '@material-ui/core';
import FormFields from 'components/form-fields';
import { bankDetailsFields } from 'constants/myAccount';
import s from './MyAccount.module.scss';

export default function BankDetails() {
  return (
    <Grid item xs={12} md={4} className={s.section}>
      <div className={s.sectionTitle}>Bank Details</div>
      <div className={`${s.sectionFields} flexColumn`}>
        {bankDetailsFields.map((field) => (
          <div style={{ width: '100%' }}>
            <FormFields fieldDetails={field} value={field.value} />
          </div>
        ))}
      </div>
    </Grid>
  );
}
