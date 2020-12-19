import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
  Hidden,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'components/button';
import SignInModal from './sign-in';
import s from './Header.module.scss';

const NavigationItems = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  // {key:'howItWorks', label: 'How it works', path: '/how-it-works'},
  {
    key: 'cryptoForNewbies',
    label: 'Crypto for newbies',
    path: '/crypto-for-newbies',
    hideOnMobile: true,
  },
  // {key:'wallets', label: 'Wallets', path: '/wallets'},
];

export default function Header(props) {
  const router = useRouter();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const { activeTabIndex: activeTabIndexProp, hideSignIn = false } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(activeTabIndexProp);

  const [showSignInModal, setShowSignInModal] = useState(false);

  const [drawerState, setDrawerState] = React.useState(false);

  function handleDrawerToggle() {
    setDrawerState(!drawerState);
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const logo = (
    <Link href="/">
      <img className={s.logo} src="/images/logo.png" alt="" />
    </Link>
  );

  const displaySwipeableDrawer = () => (
    <SwipeableDrawer
      anchor="right"
      open={drawerState}
      onOpen={handleDrawerToggle}
      onClose={handleDrawerToggle}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      classes={{
        paper: s.drawerPaper,
      }}
    >
      <div>
        <div className={`flex1 alignCenter ${s.header}`}>
          {logo}
          <div className="flex flex1" style={{ justifyContent: 'flex-end' }}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className={s.linksContainer}>
          {NavigationItems.map(
            (item) =>
              !item.hideOnMobile && (
                <Link href={item.path} key={item.key}>
                  <div
                    className={`${s.linkText} spaceBetween`}
                    role="presentation"
                    onClick={handleDrawerToggle}
                  >
                    {item.label}
                    <ArrowForwardIcon />
                  </div>
                </Link>
              ),
          )}
        </div>
      </div>
    </SwipeableDrawer>
  );

  return (
    <div className={s.headerRoot}>
      <AppBar position="static" color="inherit" className={s.appbar}>
        <Toolbar className={s.toolbar}>
          <div className="flex1 alignCenter">{logo}</div>
          <Hidden xsUp>
            <div className="flex" style={{ justifyContent: 'center' }}>
              <img
                src="/images/Group 852.png"
                alt=""
                className={s.launchingSoonImage}
              />
            </div>
          </Hidden>
          <div className="flex flex1" style={{ justifyContent: 'flex-end' }}>
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              {displaySwipeableDrawer()}
            </Hidden>
            <Hidden smDown>
              <div>
                <Tabs
                  value={activeTabIndex}
                  onChange={(e, newValue) => {
                    setActiveTabIndex(newValue);
                    const nextItem = NavigationItems[newValue];
                    router.push(nextItem.path);
                  }}
                  classes={{
                    indicator: s.indicator,
                    flexContainer: s.tabsFlexContainer,
                  }}
                >
                  {NavigationItems.map((item, index) => (
                    <Tab
                      key={item.key}
                      label={item.label}
                      classes={{
                        root: s.tabRoot,
                        selected: s.selectedTab,
                      }}
                      {...a11yProps(index)}
                    />
                  ))}
                </Tabs>
              </div>
              {!hideSignIn && (
                <div className="center">
                  <Button
                    variant="primary"
                    title="Sign In"
                    className={s.signInBtn}
                    onClick={() => setShowSignInModal(true)}
                  />
                </div>
              )}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <SignInModal
        open={showSignInModal}
        onClose={() => setShowSignInModal(false)}
      />
    </div>
  );
}
