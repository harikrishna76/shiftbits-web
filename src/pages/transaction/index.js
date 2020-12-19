import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import { transactions } from 'constants/transactions';
import TransactionDetails from './details';
import TransactionList from './list';
import s from './Transaction.module.scss';

export default function Transaction() {
  const [activeTransaction, setActiveTransaction] = useState({});

  return (
    <ProductLayout activeNavigation="transaction">
      <div className={`${s.root} flexColumn`}>
        <div className={`pagePadding pageTitle ${s.header}`}>
          Recent transactions
        </div>
        <Grid container className="flexGrow1">
          <Grid item xs={12} md={8} className="pagePadding">
            <TransactionList
              list={transactions.pending}
              type="Pending"
              setActiveTransaction={setActiveTransaction}
              activeItem={activeTransaction.transactionId}
            />
            <TransactionList
              list={transactions.completed}
              type="Completed"
              setActiveTransaction={setActiveTransaction}
              activeItem={activeTransaction.transactionId}
            />
          </Grid>
          <TransactionDetails details={activeTransaction} />
        </Grid>
      </div>
    </ProductLayout>
  );
}
