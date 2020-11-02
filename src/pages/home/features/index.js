import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import s from './Features.module.scss';

const FEATURES = [
  {
    heading: 'Sole custody',
    subHeading:
      'Your wallet, your coins! Your digital assets are at your instant disposal, and you enjoy the sole custody.',
    imageClass: s.featureImage1,
    imageUrl: '/images/Frame-2.png',
    buttonText: 'Buy crypto now',
  },
  {
    heading: 'Transparent and competent pricing',
    subHeading: (
      <>
        No surprises and no hidden fees
        <br />
        You will just pay just the amount quoted on the website.
      </>
    ),
    imageClass: s.featureImage2,
    imageUrl: '/images/Group 687.png',
    buttonText: 'Check our pricings',
  },
  {
    heading: 'Easy spending',
    subHeading:
      'Choose from a wide range of products and services to buy or gift with Bitcoin and Ethereum.',
    imageClass: s.featureImage3,
    imageUrl: '/images/Frame.png',
    buttonText: 'Browse gift cards',
  },
  {
    heading: 'Instant',
    subHeading: 'Fast and smooth transaction experience',
    imageClass: s.featureImage4,
    imageUrl: '/images/Frame-3.png',
    buttonText: 'Set up an account now',
  },
  {
    heading: '24/7 support',
    subHeading:
      'Round the clock chat assistance to troubleshoot and answer your questions in a matter of minutes.',
    imageClass: s.featureImage5,
    imageUrl: '/images/Frame-4.png',
    buttonText: 'Connect to our centre',
  },
];

const BUY_AND_SELL_FEATURES = [
  {
    heading:
      'Shift your assets seamlessly between crytpocurrency and fiat currency',
    icon: '/images/mdi_autorenew.png',
    key: 'seamless',
  },
  {
    heading: 'Instant and hassle-free transactions in just a few clicks',
    icon: '/images/transaction_red.png',
    key: 'instant',
  },
  {
    heading: 'Enjoy sole custody of your crypto assets',
    icon: '/images/mdi_lock.png',
    key: 'enjoy',
  },
];

export default function Featuers() {
  const buyAndSellOnGo = (
    <Grid
      container
      className={`spaceBetween ${s.featureContainer} ${s.buyAndSellOnGo}`}
    >
      <Grid item xs={12} md={5}>
        <img src="/images/Group 179.png" alt="" className={s.featureImage6} />
      </Grid>
      <Grid item xs={12} md={7} className={s.featuresSection}>
        <div>
          <div className={`flex ${s.headerSection}`}>
            <Typography
              className={`fontSize64 fontWeightBold ${s.buyAndSellHeader}`}
            >
              Buy and sell&nbsp;<Hidden smUp>crypto</Hidden>
            </Typography>
            <Typography
              className={`fontSize64 fontWeightBold greenColor ${s.buyAndSellHeader}`}
            >
              on-the-go
            </Typography>
          </div>
          {BUY_AND_SELL_FEATURES.map((feature) => (
            <Grid
              item
              xs={12}
              md={10}
              lg={9}
              className={`flex ${s.marginV32} ${s.featureBox}`}
              key={feature.key}
            >
              <div className={`${s.iconBox} center bgLightGreen`}>
                <img src={feature.icon} alt="" width={32} height={32} />
              </div>
              <Typography className={`fontSize24 ${s.heading}`}>
                {feature.heading}
              </Typography>
            </Grid>
          ))}
        </div>
        <Hidden smDown>
          <div
            className="greenColor fontSize24 fontWeightBold"
            style={{ margin: '2rem 0' }}
          >
            COMING SOON!
          </div>
        </Hidden>
        <div className={`flex ${s.storesLinksContainer}`}>
          <img src="/images/google-play-badge 2.png" alt="" />
          <img
            src="/images/app-store-badge 2.png"
            alt=""
            style={{ marginLeft: '2rem' }}
          />
        </div>
      </Grid>
    </Grid>
  );

  return (
    <Grid container className={`center flexColumn ${s.homeMain}`}>
      <div>
        <div className={`${s.featureHeaderContainer} center`}>
          <div className={s.headerStrip} />
          <Typography
            className={`fontSize64 textAlignCenter ${s.featureHeader}`}
          >
            Our Features
          </Typography>
        </div>
        {FEATURES.map((feature) => (
          <Grid
            container
            className={`spaceBetween ${s.featureContainer}`}
            key={feature.heading}
          >
            <Grid item xs={12} md={6} className={s.featureImgContainer}>
              <img
                src={feature.imageUrl}
                alt=""
                className={feature.imageClass}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={`fontSize40 fontWeightBold ${s.heading}`}>
                {feature.heading}
              </Typography>
              <Typography className={`fontSize24 ${s.subHeading}`}>
                {feature.subHeading}
              </Typography>
              <div className={s.featuresBtnContainer}>
                <div className={`${s.featuresButton} center`}>
                  <Typography className="greenColor fontWeightBold">
                    {feature.buttonText}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </div>
      <div>{buyAndSellOnGo}</div>
    </Grid>
  );
}
