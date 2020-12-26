import React from 'react';
import s from './BuyAndSellTransaction.module.scss';

export default function BoxLayout(props) {
  const { header, children } = props;

  return (
    <div className={s.boxLayout}>
      <div className={`${s.boxHeader} alignCenter`}>{header}</div>
      <div className={s.boxBody}>{children}</div>
    </div>
  );
}
