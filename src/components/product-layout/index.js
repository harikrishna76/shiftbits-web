import React from 'react';
import Layout from 'components/layout';
import Navigation from './navigation';
import s from './ProductLayout.module.scss';

export default function ProductLayout(props) {
  const { children, activeNavigation } = props;

  return (
    <Layout>
      <div className={s.root}>
        <div className={s.navigation}>
          <Navigation activeNavigation={activeNavigation} />
        </div>
        <div className={s.container}>{children}</div>
      </div>
    </Layout>
  );
}
