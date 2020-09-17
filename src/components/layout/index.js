import React from 'react';
import { Typography } from '@material-ui/core';
import Header from 'components/header';
import Footer from 'components/footer';

export default function Layout(props) {
  const { children, activeTabIndex } = props;

  return (
    <div>
      <Typography>
        <Header activeTabIndex={activeTabIndex} />
        {children}
        <Footer />
      </Typography>
    </div>
  );
}
