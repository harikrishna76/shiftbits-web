import React from 'react';
import Link from 'next/link';
import s from './Navigation.module.scss';

const navigationItems = [
  { key: 'buy', label: 'Buy', path: '/buy' },
  { key: 'sell', label: 'Sell', path: '/sell' },
  { key: 'spends', label: 'Spends', path: '/spends' },
  { key: 'transaction', label: 'Transaction', path: '/transaction' },
  { key: 'account', label: 'Account', path: '/account' },
  // { key: 'faq', label: "FAQ's", path: '/faq' },
];

export default function ProductLayout(props) {
  const { activeNavigation } = props;
  return (
    <div>
      {navigationItems.map((item) => (
        <Link href={item.path} key={item.key}>
          <div
            className={`${s.item} ${
              activeNavigation === item.key && s.activeItem
            }`}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
