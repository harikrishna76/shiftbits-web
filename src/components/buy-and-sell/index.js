import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Button from 'components/button';
import s from './BuyAndSell.module.scss';
import BoxLayout from './BoxLayout';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BuyAndSell(props) {
  const { transactionType = 'buy' } = props;

  const [currencyIndex, setCurrencyIndex] = useState(0);

  const NavigationItems = [
    {
      key: 'bitcoin',
      label: 'Bitcoin',
      image: (
        <img src="/images/bitcoin_grey.svg" alt="" className={s.currencyIcon} />
      ),
      activeImage: (
        <img src="/images/bitcoin.svg" alt="" className={s.currencyIcon} />
      ),
    },
    {
      key: 'ethereum',
      label: 'Ethereum',
      image: (
        <img
          src="/images/ethereum_grey.svg"
          alt=""
          className={s.currencyIcon}
        />
      ),
      activeImage: (
        <img src="/images/ethereum.svg" alt="" className={s.currencyIcon} />
      ),
    },
  ];

  const [buySellTabIndex, setBuySellTabIndex] = useState(0);

  const [cryptoPrice, setCryptoPrice] = useState({
    bitcoin: { buy: 0.0000013, sell: 766977.1 },
    ethereum: { buy: 0.000036, sell: 766977.1 },
  });

  const [
    activeCrypto,
    // setActiveCrypto
  ] = useState('bitcoin');

  const [buyAmount, setBuyAmount] = useState(5000);

  const [buyingCoins, setBuyingCoins] = useState(
    buyAmount * cryptoPrice[activeCrypto].buy,
  );

  const renderCurrecyTabs = () => {
    return (
      <BoxLayout header="1. Choose crypto">
        <div>
          <Tabs
            value={currencyIndex}
            onChange={(e, newValue) => {
              setCurrencyIndex(newValue);
            }}
            classes={{ indicator: s.buySellTabIndicator }}
          >
            {NavigationItems.map((item, index) => (
              <Tab
                key={item.key}
                label={
                  <div className="flex center">
                    {index === currencyIndex ? item.activeImage : item.image}
                    {item.label}
                  </div>
                }
                classes={{
                  root: s.buySellTabRoot,
                  selected: s[`selectedBuySellTab${index}`],
                }}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </div>
      </BoxLayout>
    );
  };

  return (
    <div className={s.root}>
      {renderCurrecyTabs()}
      <BoxLayout header="2. Enter amount">
        <div
          className={`center ${s.fieldsSection}`}
          style={{
            flexDirection:
              transactionType === 'buy' ? 'column' : 'column-reverse',
          }}
        >
          <div className={`spaceBetween ${s.fieldContainer}`}>
            <input
              type="text"
              value={buyAmount}
              className={s.inputField}
              onChange={(event) => {
                const newValue = parseInt(event.target.value || 0, 10);
                setBuyAmount(newValue);
                setBuyingCoins(newValue * cryptoPrice[activeCrypto].buy);
              }}
              disabled={transactionType === 'sell'}
            />
            <img src="/images/XMLID 1.png" alt="" width={28} height={28} />
          </div>
          <div className={`center ${s.transactionIconContainer}`}>
            <img src="/images/transaction.png" alt="" width={16} height={16} />
          </div>
          <div className={`spaceBetween ${s.fieldContainer}`}>
            <input
              type="text"
              value={buyingCoins}
              onChange={(event) => {
                const newValue = event.target.value;
                if (!Number.isNaN(Number(event.target.value))) {
                  setBuyingCoins(newValue);
                  setBuyAmount(newValue * cryptoPrice[activeCrypto].sell);
                }
              }}
              className={s.inputField}
              disabled={transactionType === 'buy'}
            />
            {NavigationItems[currencyIndex].activeImage}
          </div>
        </div>
      </BoxLayout>
      {transactionType === 'buy' && (
        <BoxLayout header="3. Wallet address">
          <div className="center pagePadding flexColumn">
            <div className="fieldLabel">Enter wallet address</div>
            <div className={`spaceBetween ${s.fieldContainer}`}>
              <input
                type="text"
                value="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
                className={s.inputField}
              />
            </div>
            <div className={s.makeSureText}>
              Make sure you enter your own wallet address.{' '}
              <span>Don’t have one?</span>
            </div>
          </div>
        </BoxLayout>
      )}
      <BoxLayout header={`${transactionType === 'buy' ? 4 : 3}. Order summary`}>
        <div className="pagePadding">order summary</div>
      </BoxLayout>
      <Button
        variant="primary"
        title={`${transactionType} ${NavigationItems[currencyIndex].label}`}
        className={s.proceedBtn}
        titleClassName={s.proceedBtnTitle}
      />
      {transactionType === 'sell' && (
        <BoxLayout header="4. Wallet address">
          <div className="pagePadding">wallet address</div>
        </BoxLayout>
      )}
    </div>
  );
}
