import React, { useState } from 'react';
import {
  AppBar, Toolbar, Tabs, Tab,
} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const NavigationItems = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  // {key:'howItWorks', label: 'How it works', path: '/how-it-works'},
  { key: 'cryptoForNewbies', label: 'Crypto for newbies', path: '/crypto-for-newbies' },
  // {key:'wallets', label: 'Wallets', path: '/wallets'},
];

export default function Header(props) {
  const router = useRouter();

  const { activeTabIndex: activeTabIndexProp } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(activeTabIndexProp);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={styles.headerRoot}>
      <AppBar position="static" color="inherit" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <div className="flex1">
            <Link href="/">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>
          <div className="flex flex1" style={{ justifyContent: 'center' }}>
            <img src="/images/Group 852.png" alt="" className={styles.launchingSoonImage} />
          </div>
          <div className="flex flex1" style={{ justifyContent: 'flex-end' }}>
            <Tabs
              value={activeTabIndex}
              onChange={(e, newValue) => {
                setActiveTabIndex(newValue);
                const nextItem = NavigationItems[newValue];
                router.push(nextItem.path);
              }}
              classes={{
                indicator: styles.indicator,
                flexContainer: styles.tabsFlexContainer,
              }}
            >
              {NavigationItems.map((item, index) => (
                <Tab
                  key={item.key}
                  label={item.label}
                  classes={{ root: styles.tabRoot, selected: styles.selectedTab }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
