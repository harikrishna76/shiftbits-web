import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import { transactions } from 'constants/transactions';
import TransactionDetails from './details';
import TransactionList from './list';
import s from './Transaction.module.scss';

export default function Transaction() {
  const [activeTransaction, setActiveTransaction] = useState({});

  const totalTransactions = transactions
    ? (transactions.pending || []).length +
      (transactions.completed || []).length
    : 0;

  const renderListContainers = () => {
    return (
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
    );
  };

  const renderNoTransactions = () => {
    return (
      <Grid container className="flexGrow1 center flexColumn">
        <img
          className={s.noTransactionImg}
          src="/images/no-transactions.svg"
          alt=""
        />
        <div className={`${s.noTransactions} pageTitle`}>
          No recent transactions!
        </div>
      </Grid>
    );
  };

  return (
    <ProductLayout activeNavigation="transaction">
      <div className={`${s.root} flexColumn`}>
        <div className={`pagePadding pageTitle ${s.header}`}>
          Recent transactions
        </div>
        {totalTransactions ? renderListContainers() : renderNoTransactions()}
      </div>
    </ProductLayout>
  );
}
