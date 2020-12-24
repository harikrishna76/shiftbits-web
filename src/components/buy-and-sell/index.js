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
                    <span>{item.label}</span>
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

  const renderEnterAmount = () => {
    return (
      <BoxLayout header="2. Enter amount">
        <div
          className={`center ${s.fieldsSection}`}
          style={{
            flexDirection:
              transactionType === 'buy' ? 'column' : 'column-reverse',
          }}
        >
          <div className={`${s.fieldContainer}`}>
            <img src="/images/XMLID 1.png" alt="" />
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
          </div>
          <div className={`center ${s.transactionIconContainer}`}>
            <img src="/images/transaction.png" alt="" />
            <div className={s.dividerLine} />
          </div>
          <div className={`${s.fieldContainer}`}>
            {NavigationItems[currencyIndex].activeImage}
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
          </div>
        </div>
      </BoxLayout>
    );
  };

  const renderSummary = () => {
    return (
      <BoxLayout header={`${transactionType === 'buy' ? 4 : 3}. Order summary`}>
        <div className={`${s.summaryHead} center flexColumn`}>
          <div>{transactionType === 'buy' ? 'BUYING' : 'SELLING'}</div>
          <div className={s.amount}>0.005647579 BTC</div>
          <div>1 BTC @ ₹ 6,64,098.68</div>
        </div>
        <div className={s.summaryDetails}>
          <div className="spaceBetween">
            <span className={s.title}>Total amount</span>
            <span className={s.value}>₹ 10,000</span>
          </div>
          <div className="spaceBetween">
            <span className={s.title}>Service Fee (21%)</span>
            <span className={s.value}>₹ 5,000</span>
          </div>
          <div className="spaceBetween">
            <span className={s.title}>Total</span>
            <span className={s.value}>₹ 15,000</span>
          </div>
        </div>
      </BoxLayout>
    );
  };

  const renderWalletForBuy = () => {
    return (
      <BoxLayout header="3. Wallet address">
        <div className="center pagePadding flexColumn">
          <div className="fieldLabel">Enter wallet address</div>
          <div className={`spaceBetween ${s.fieldContainer}`}>
            <input
              type="text"
              value="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
              style={{ fontSize: '1rem' }}
              className={s.inputField}
            />
          </div>
          <div className={s.makeSureText}>
            Make sure you enter your own wallet address.{' '}
            <span>Don’t have one?</span>
          </div>
        </div>
      </BoxLayout>
    );
  };

  const renderWalletForSell = () => {
    return (
      <BoxLayout header="4. Wallet address">
        <div className={`${s.walletForSell} center flexColumn`}>
          <div>
            Please send the exact amount from your wallet or exchange account to
            the following address
          </div>
          <div className={`${s.textType2} center flexColumn`}>
            <div className={s.scanQR}>Scan QR code</div>
            <img src="/images/Group 587.png" alt="" />
          </div>
          <div className={`${s.textType2} ${s.orSection}`}>
            <div className={s.divider} />
            <div className={s.or}>OR</div>
          </div>
          <div className={s.textType2}>Copy wallet address</div>
          <div className={s.copyLink}>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</div>
          <div>
            You have 5 min to send funds otherwise the transaction will be
            canceled automaticaly
          </div>
        </div>
      </BoxLayout>
    );
  };

  return (
    <div className={s.root}>
      {renderCurrecyTabs()}
      {renderEnterAmount()}
      {transactionType === 'buy' && renderWalletForBuy()}
      {renderSummary()}
      <Button
        variant="primary"
        title={`${transactionType} ${NavigationItems[currencyIndex].label}`}
        className={s.proceedBtn}
        titleClassName={s.proceedBtnTitle}
      />
      {transactionType === 'sell' && renderWalletForSell()}
    </div>
  );
}
