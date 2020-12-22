import React, { useState } from 'react';
import { Grid, Tabs, Tab, Typography } from '@material-ui/core';
import Layout from 'components/layout';
import CryptoContentViewer from './CryptoContentViewer';
import s from './CryptoForNewbies.module.scss';

const cryptoNavigation = [
  { key: 'history', label: 'History' },
  { key: 'basics', label: 'Basics' },
  { key: 'howTechnologyWorks', label: 'How does the technology work?' },
  { key: 'fiatVsCryptocurrency', label: 'Fiat vs cryptocurrency' },
];

const headerContent = [
  {
    title: 'The History of Cryptocurrency',
    description:
      'The origin, history, working, and the story of cryptocurrency are pretty darn interesting, and we think understanding them will help you appreciate the whole system a little more. ',
    date: '',
  },
  {
    title: 'Basics of Crptocurrency',
    description:
      'In this module, we highlight some key terms and points on cryptocurrrency, cryptography and Bitcoin.',
    date: '',
  },
  {
    title: 'How does the technology work?',
    description:
      'Satoshi Nakamoto mined the first block in the bitcoin network, thus implementing the blockchain technology. He/she/they published a paper describing to the world the workings of Bitcoin and blockchain technology.',
    date: '',
  },
  {
    title: 'Fiat vs Cryptocurrency',
    description:
      'In this module, we highlight some key terms and points on cryptocurrrency, cryptography and Bitcoin.',
    date: '',
  },
];

export default function CryptoForNewbies() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function displayHeader() {
    const content = headerContent[activeTabIndex];
    return (
      <Grid container className={s.introduction} justify="center">
        <Grid container alignItems="center" xs={12} md={9}>
          <Grid item xs={12} md={7}>
            <div>
              <div variant="h4" className={s.CryptoForNewbiesH1}>
                {content.title}
              </div>
              <div className={`${s.introductionSubtitle} greyText`}>
                {content.description}
              </div>
              <Typography className="greyText">
                Updated July 15, 2020 &bull; 10 min read
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="/images/Payment processed 1 1.png"
              alt=""
              className={s.CryptoForNewbiesBannerImg}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function displayPageContent() {
    if (cryptoNavigation[activeTabIndex]) {
      return (
        <CryptoContentViewer pageKey={cryptoNavigation[activeTabIndex].key} />
      );
    }
    return null;
  }

  function displayNavigationItem(nextIndex, next = true) {
    return (
      <div
        className={`spaceBetween ${s.cryptoFooter}`}
        onClick={() => setActiveTabIndex(nextIndex)}
        role="presentation"
      >
        <div role="presentation" className={s.nextTopic}>
          <Typography
            align="center"
            className="fontWeightBold"
            style={{
              display: 'flex',
              flexDirection: next ? '' : 'row-reverse',
            }}
          >
            {next ? 'Next topic' : 'Previous'}
            <span>
              {next ? '' : '<'}
              &nbsp;&nbsp;&nbsp;
              {next ? '>' : ''}
            </span>
          </Typography>
        </div>
        <Typography className="fontWeightBold greenText" noWrap>
          {cryptoNavigation[nextIndex].label}
        </Typography>
      </div>
    );
  }

  function displayNavigation() {
    let view = null;
    if (activeTabIndex === 0) {
      view = displayNavigationItem(activeTabIndex + 1);
    } else if (activeTabIndex === cryptoNavigation.length - 1) {
      view = displayNavigationItem(activeTabIndex - 1, false);
    } else {
      view = (
        <Grid container justify="space-between">
          <Grid item xs={5}>
            {displayNavigationItem(activeTabIndex - 1, false)}
          </Grid>
          <Grid item xs={6}>
            {displayNavigationItem(activeTabIndex + 1)}
          </Grid>
        </Grid>
      );
    }
    return view;
  }

  return (
    <Layout activeTabIndex={2}>
      <div className="flex cryptoForNewBies">
        <Tabs
          value={activeTabIndex}
          onChange={(e, newValue) => {
            setActiveTabIndex(newValue);
          }}
          className={s.cryptoSubheader}
          classes={{ indicator: s.cryptoIndicator }}
        >
          {cryptoNavigation.map((item, index) => (
            <Tab
              key={item.key}
              label={item.label}
              {...a11yProps(index)}
              classes={{ root: s.cryptoTabRoot, selected: s.cryptoSelectedTab }}
            />
          ))}
        </Tabs>
      </div>
      {displayHeader()}
      {displayPageContent()}
      <Grid container justify="center">
        <Grid container alignItems="center" xs={12} md={9}>
          <Grid item xs={12} md={8} justify="space-between">
            {displayNavigation()}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
