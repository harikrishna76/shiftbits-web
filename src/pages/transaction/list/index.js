import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import { transactions } from 'constants/transactions';
import s from '../Transaction.module.scss';

export default function Transaction(props) {
  const { list, type, setActiveTransaction, activeItem } = props;

  if (!list.length) {
    return null;
  }

  const renderListItem = (item = {}) => {
    if (!item?.transactionId) {
      return null;
    }
    const activeCoinImgUrl =
      item.currency === 'bitcoin'
        ? '/images/bitcoin.svg'
        : '/images/ethereum.svg';
    const currencyShort = item.currency === 'bitcoin' ? 'BTC' : 'ETH';
    return (
      <div
        onClick={() => {
          setActiveTransaction(item);
        }}
        role="presentation"
        className={`${s.listItem} flex pointer ${
          item.transactionId === activeItem ? s.activeListItem : ''
        }`}
      >
        <img src={activeCoinImgUrl} alt="" className={s.currencyImg} />
        <div className="spaceBetween flexGrow1">
          <div className="flexColumn">
            <div className={s.textType1}>
              {item.transactionType === 'bought' ? 'Recieved' : 'Sent'}{' '}
              {currencyShort}
            </div>
            <div
              className={`${s.textType2} ${
                type === 'Pending' && s.inProgressText
              }`}
            >
              {type === 'Pending' ? 'IN PROGRESS' : item.date}
            </div>
          </div>
          <div>
            <div className={s.textType1}>
              {item.value} {currencyShort}
            </div>
            <div className={s.textType2}>{item.boughtAt}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Grid item xs={12} md={9} className={s[`list${type}`]}>
      <div className={s.listHeader}>{type} Transactions</div>
      {list.map((item) => renderListItem(item))}
    </Grid>
  );
}
