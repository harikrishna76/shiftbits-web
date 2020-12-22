import React, { useState, useEffect } from 'react';
import { Grid, Typography, Tabs, Tab, Hidden } from '@material-ui/core';
import axios from 'axios';
import Layout from 'components/layout';
import Features from './features';
import s from './Home.module.scss';

const NavigationItems = [
  { key: 'buy', label: 'Buy' },
  { key: 'sell', label: 'Sell' },
];
// mobile comment

export default function Home() {
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

  function fetchCoinLivePrice() {
    let lastFetched = new Date(localStorage.getItem('lastFetched'));
    let exchangeRate = localStorage.getItem('exchangeRate');
    lastFetched = (new Date() - lastFetched) / 1000 / 60;
    if (lastFetched < 10 && exchangeRate) {
      setCryptoPrice({
        bitcoin: { buy: 1 / exchangeRate, sell: exchangeRate },
        ethereum: { buy: 1 / exchangeRate, sell: exchangeRate },
      });
    } else {
      axios
        .get('https://blockchain.info/ticker')
        .then((response) => {
          if (response && response.data && response.data.INR) {
            exchangeRate = response.data.INR.buy;
            localStorage.setItem('lastFetched', new Date());
            localStorage.setItem('exchangeRate', exchangeRate);
            setCryptoPrice({
              bitcoin: { buy: 1 / exchangeRate, sell: exchangeRate },
              ethereum: { buy: 1 / exchangeRate, sell: exchangeRate },
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // https://blockchain.info/tobtc?currency=INR&value=1
  }

  useEffect(() => {
    fetchCoinLivePrice();
  }, []);

  useEffect(() => {
    setBuyingCoins(5000 * cryptoPrice[activeCrypto].buy);
  }, [activeCrypto, cryptoPrice]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const displayBuySellContainer = () => (
    <div className={s.buySellContainer}>
      <Tabs
        value={buySellTabIndex}
        onChange={(e, newValue) => {
          setBuySellTabIndex(newValue);
        }}
        classes={{ indicator: s.buySellTabIndicator }}
      >
        {NavigationItems.map((item, index) => (
          <Tab
            key={item.key}
            label={item.label}
            classes={{
              root: s.buySellTabRoot,
              selected: s.selectedBuySellTab,
            }}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <div className={s.margin24}>
        <div
          className="flex"
          style={{
            flexDirection: buySellTabIndex === 0 ? 'column' : 'column-reverse',
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
              disabled={buySellTabIndex === 1}
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
              disabled={buySellTabIndex === 0}
            />
            <img src="/images/bitcoin.svg" alt="" width={28} height={28} />
          </div>
        </div>
        <div
          className={`fontSize20 fontWeightBold ${s.black60} ${s.marginT22} textAlignCenter`}
        >
          1 BTC ~ {cryptoPrice[activeCrypto].sell} INR
        </div>
        {/* <div className={`${s.buyButton} center`}>
          <div className="fontWeightBold fontSize20">
            {buySellTabIndex===0?"Buy Bitcoin":"Sell Bitcoin"}
          </div>
        </div> */}
      </div>
    </div>
  );

  return (
    <Layout activeTabIndex={0}>
      <div className={s.homeBannerSection}>
        <div className={s.heading1}>
          <div className={`${s.homeHeading1} textAlignCenter`}>
            Buy, Sell & Spend Cryptocurrency
          </div>
          <div className={`${s.homeHeading2} textAlignCenter greenColor`}>
            It’s easier than you think!
          </div>
          <div className={`${s.homeHeading3} textAlignCenter`}>
            INDIA’S FIRST NON CUSTODIAL PLATFORM
          </div>
        </div>
        <Hidden smUp>
          <div className="flex flex1" style={{ justifyContent: 'center' }}>
            <img
              src="/images/Group 852.png"
              alt=""
              className={s.launchingSoonImage}
            />
          </div>
        </Hidden>
        <Hidden smDown>
          <div
            className="spaceBetween"
            style={{ flexGrow: 1, alignItems: 'flex-start' }}
          >
            <div className={s.bannerImageContainer}>
              <img
                src="/images/Group 840.png"
                alt=""
                className={s.homeImage1}
              />
            </div>
            <div className="center flexColumn flex1">
              {displayBuySellContainer()}
              {/* <div className={s.launchingSoon}>
              <div className="greenColor fontSize24 fontWeightBold">LAUNCHING SOON!</div>
            </div> */}
            </div>
            <div
              className={`${s.bannerImageContainer} ${s.bannerImageContainerRight}`}
              style={{ justifyContent: 'flex-end' }}
            >
              <img
                src="/images/Asset 4 1.png"
                alt=""
                className={s.homeImage2}
              />
            </div>
          </div>
        </Hidden>
      </div>
      <Features />
    </Layout>
  );
}
