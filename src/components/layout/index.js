import React from 'react';
import { Typography } from '@material-ui/core';
import Header from 'components/header';
import Footer from 'components/footer';

export default function Layout(props) {
  const { children, activeTabIndex, hideSignIn } = props;

  return (
    <div>
      <Typography>
        <Header activeTabIndex={activeTabIndex} hideSignIn={hideSignIn} />
        {children}
        <Footer />
      </Typography>
    </div>
  );
}
