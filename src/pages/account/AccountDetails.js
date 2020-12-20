import React from 'react';
import { Grid } from '@material-ui/core';
import FormFields from 'components/form-fields';
import { accountDetailsFields } from 'constants/myAccount';
import s from './MyAccount.module.scss';

export default function AccountDetails() {
  return (
    <Grid item xs={12} md={4} className={s.section}>
      <div className={s.sectionTitle}>Account Details</div>
      <div className={s.sectionFields}>
        {accountDetailsFields.map((field) => (
          <FormFields fieldDetails={field} value={field.value} />
        ))}
      </div>
    </Grid>
  );
}
