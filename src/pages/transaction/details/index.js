import React from 'react';
import { Grid } from '@material-ui/core';
import s from '../Transaction.module.scss';

export default function TransactionDetails(props) {
  const { details } = props;

  if (!details?.transactionId) {
    return null;
  }

  return (
    <Grid
      item
      xs={12}
      md={4}
      className={`${s.transactionDetails} flexGrow1 pagePadding`}
    >
      <div className="pageTitle">Transaction details</div>
      <div>
        <div className={`${s.itemDetails} spaceBetween`}>
          <span className={s.itemHeader}>Payment on:</span>
          <span className={s.itemValue} color="black60">
            {details.date}
          </span>
        </div>
        <div className={`${s.itemDetails} spaceBetween`}>
          <span className={s.itemHeader}>Time:</span>
          <span className={s.itemValue} color="black60">
            {details.time}
          </span>
        </div>
        <div className={`${s.itemDetails} spaceBetween`}>
          <span className={s.itemHeader}>Transaction ID:</span>
          <span className={s.itemValue} color="black60">
            {details.transactionId}
          </span>
        </div>
        <div className={`${s.itemDetails} spaceBetween`}>
          <span className={s.itemHeader}>Payment method:</span>
          <span className={s.itemValue} color="black60">
            {details.paymentMethod}
          </span>
        </div>
        <div className={`${s.itemDetails} spaceBetween`}>
          <span className={s.itemHeader}>Bought at exchange rate:</span>
          <span className={s.itemValue} color="black60">
            {details.boughtAt}
          </span>
        </div>
      </div>
    </Grid>
  );
}
