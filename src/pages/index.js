import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Tabs, Tab,
} from '@material-ui/core';
import axios from 'axios';
import Layout from 'components/layout';
import './index.module.scss';

const NavigationItems = [
  { key: 'buy', label: 'Buy' },
  { key: 'sell', label: 'Sell' },
];

export default function Home() {
  const [buySellTabIndex, setBuySellTabIndex] = useState(0);

  const [cryptoPrice, setCryptoPrice] = useState({
    bitcoin: { buy: 0.0000013, sell: 766977.10 },
    ethereum: { buy: 0.000036, sell: 766977.10 },
  });

  const [activeCrypto,
    // setActiveCrypto
  ] = useState('bitcoin');

  const [buyAmount, setBuyAmount] = useState(5000);

  const [buyingCoins, setBuyingCoins] = useState(
    buyAmount * cryptoPrice[activeCrypto].buy,
  );

  function fetchCoinLivePrice() {
    let lastFetched = new Date(localStorage.getItem('lastFetched'));
    let exchangeRate = localStorage.getItem('exchangeRate');
    console.log('localStorage', lastFetched);
    lastFetched = (new Date() - lastFetched) / 1000 / 60;
    console.log('localStorage', lastFetched);
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
            console.log(response.data.INR.buy);
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
    <div className="buySellContainer">
      <Tabs
        value={buySellTabIndex}
        onChange={(e, newValue) => {
          setBuySellTabIndex(newValue);
        }}
        classes={{ indicator: 'buySellTabIndicator' }}
      >
        {NavigationItems.map((item, index) => (
          <Tab
            key={item.key}
            label={item.label}
            classes={{ root: 'buySellTabRoot', selected: 'selectedBuySellTab' }}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <div className="margin24">
        <div className="flex" style={{ flexDirection: buySellTabIndex === 0 ? 'column' : 'column-reverse' }}>
          <div className="spaceBetween fieldContainer">
            <input
              type="text"
              value={buyAmount}
              className="inputField"
              onChange={(event) => {
                const newValue = parseInt(event.target.value || 0, 10);
                setBuyAmount(newValue);
                setBuyingCoins(newValue * cryptoPrice[activeCrypto].buy);
              }}
              disabled={buySellTabIndex === 1}
            />
            <img src="/images/XMLID 1.png" alt="" width={28} height={28} />
          </div>
          <div className="center transactionIconContainer">
            <img src="/images/transaction.png" alt="" width={16} height={16} />
          </div>
          <div className="spaceBetween fieldContainer">
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
              className="inputField"
              disabled={buySellTabIndex === 0}
            />
            <img src="/images/bitcoin2.png" alt="" width={28} height={28} />
          </div>
        </div>
        <div className="fontSize20 fontWeightBold black60 marginT22 textAlignCenter">
          1 BTC ~
          {cryptoPrice[activeCrypto].sell}
          {' '}
          INR
        </div>
        {/* <div className="buyButton center">
          <div className="fontWeightBold fontSize20">{buySellTabIndex===0?"Buy Bitcoin":"Sell Bitcoin"}</div>
        </div> */}
      </div>
    </div>
  );

  return (
    <Layout activeTabIndex={0}>
      <div className="homeBannerSection">
        <div className="heading1">
          <div className="homeHeading1 textAlignCenter">Buy, Sell & Spend Cryptocurrency</div>
          <div className="homeHeading2 textAlignCenter greenColor">It’s easier than you think!</div>
          <div className="homeHeading3 textAlignCenter">INDIA’S FIRST NON CUSTODIAL PLATFORM</div>
        </div>
        <div
          className="spaceBetween"
          style={{ flexGrow: 1, alignItems: 'flex-start' }}
        >
          <div className="bannerImageContainer">
            <img src="/images/Group 840.png" alt="" className="homeImage1" />
          </div>
          <div
            className="center flexColumn"
            style={{ flex: 1, display: 'flex' }}
          >
            {displayBuySellContainer()}
            {/* <div className="launchingSoon">
              <div className="greenColor fontSize24 fontWeightBold">LAUNCHING SOON!</div>
            </div> */}
          </div>
          <div className="bannerImageContainer" style={{ justifyContent: 'flex-end' }}>
            <img src="/images/Asset 4 1.png" alt="" className="homeImage2" />
          </div>
        </div>
      </div>
      <Grid container className="center flexColumn homeMain">
        <Typography className="fontSize64 textAlignCenter marginBottomHeading">Our Features</Typography>
        <Grid xs={12} md={10} className="spaceBetween featureContainer">
          <Grid item xs={6} md={6}>
            <img src="/images/Frame-2.png" alt="" className="featureImage1" />
          </Grid>
          <Grid item xs={6} md={5}>
            <Typography className="fontSize40 fontWeightBold">Sole custody</Typography>
            <Typography className="fontSize24">Your wallet, your coins! Your digital assets are at your instant disposal, and you enjoy the sole custody.</Typography>
            <div className="featuresButton center">
              <Typography className="greenColor fontWeightBold">Buy crypto now</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} md={10} className="spaceBetween featureContainer">
          <Grid item xs={6} md={6}>
            <Typography className="fontSize40 fontWeightBold">Transparent and competent pricing</Typography>
            <Typography className="fontSize24">
              No surprises and no hidden fees
              <br />
              You will just pay just the amount quoted on the website.
            </Typography>
            <div className="featuresButton center">
              <Typography className="greenColor fontWeightBold">Check our pricings</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src="/images/Group 687.png" alt="" className="featureImage2" />
          </Grid>
        </Grid>
        <Grid xs={12} md={10} className="spaceBetween featureContainer">
          <Grid item xs={6} md={6}>
            <img src="/images/Frame.png" alt="" className="featureImage3" />
          </Grid>
          <Grid item xs={6} md={5}>
            <Typography className="fontSize40 fontWeightBold">Easy spending</Typography>
            <Typography className="fontSize24">Choose from a wide range of products and services to buy or gift with Bitcoin and Ethereum.</Typography>
            <div className="featuresButton center">
              <Typography className="greenColor fontWeightBold">Browse gift cards</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} md={10} className="spaceBetween featureContainer">
          <Grid item xs={6} md={5}>
            <Typography className="fontSize40 fontWeightBold">Instant</Typography>
            <Typography className="fontSize24">Fast and smooth transaction experience</Typography>
            <div className="featuresButton center">
              <Typography className="greenColor fontWeightBold">Set up an account now</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src="/images/Frame-3.png" alt="" className="featureImage4" />
          </Grid>
        </Grid>
        <Grid xs={12} md={10} className="spaceBetween featureContainer">
          <Grid item xs={6} md={6}>
            <img src="/images/Frame-4.png" alt="" className="featureImage5" />
          </Grid>
          <Grid item xs={6} md={5}>
            <Typography className="fontSize40 fontWeightBold">24/7 support</Typography>
            <Typography className="fontSize24">Round the clock chat assistance to troubleshoot and answer your questions in a matter of minutes.</Typography>
            <div className="featuresButton center">
              <Typography className="greenColor fontWeightBold">Connect to our centre</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} md={10} className="spaceBetween" style={{ width: '100%' }}>
          <Grid item xs={12} md={7}>
            <div item className="flex">
              <Typography className="fontSize64 fontWeightBold">Buy and sell&nbsp;</Typography>
              <Typography className="fontSize64 fontWeightBold greenColor">on-the-go</Typography>
            </div>
            <Grid item xs={12} md={10} lg={9} className="flex marginV32">
              <div className="iconBox center bgLightGreen">
                <img src="/images/mdi_autorenew.png" alt="" width={32} height={32} />
              </div>
              <Typography className="fontSize24">Shift your assets seamlessly between crytpocurrency and fiat currency</Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={9} className="flex marginV32">
              <div className="iconBox center bgLightRed">
                <img src="/images/transaction_red.png" alt="" width={32} height={32} />
              </div>
              <Typography className="fontSize24">Instant and hassle-free transactions in just a few clicks</Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={9} className="flex marginV32">
              <div className="iconBox center bgLightPurple">
                <img src="/images/mdi_lock.png" alt="" width={32} height={32} />
              </div>
              <Typography className="fontSize24">Enjoy sole custody of your crypto assets</Typography>
            </Grid>
            <div className="greenColor fontSize24 fontWeightBold" style={{ margin: '2rem 0' }}>COMING SOON!</div>
            <div className="flex">
              <img src="/images/google-play-badge 2.png" alt="" height={60} />
              <img src="/images/app-store-badge 2.png" alt="" height={60} style={{ marginLeft: '2rem' }} />
            </div>
          </Grid>
          <div>
            <img src="/images/Group 179.png" alt="" className="featureImage6" />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
