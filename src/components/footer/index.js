import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import s from './Footer.module.scss';

const Company = [
  { label: 'About', link: '/about' },
  { label: 'High value investors' },
  { label: 'Contact Us' },
  { label: "FAQ's" },
  { label: 'Crypto for dummies' },
  { label: 'Terms & Conditions' },
  { label: 'Privay policy' },
];

const Learn = ['What is Bitcoin?', 'What is Ethereum?', 'Buy Bitcoin', 'Buy Ethereum', 'Taxes', 'Wallets'];

/* const Social=['./medium.png', 'reddit.png', './telegram.png', './linkedin.png',
 './whatsapp.png', '/twitter.png', './youtube.png', './instagram.png', './facebook.png'] */
const Social = ['/images/twitter.png', '/images/linkedin.png'];

export default function Footer() {
  return (
    <div className={s.footerRoot}>
      <Grid container xs={12} md={12} lg={9}>
        <Grid item xs={12} md={3} className={s.footerItem}>
          <img src="/images/logo.svg" alt="" />
          <Typography className={s.greyItem}>
            &nbsp;&nbsp;&nbsp; &copy; 2020 ShiftBits
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={s.footerItem}>
          <Typography className={`fontWeightBold ${s.heading}`}>Company</Typography>
          {Company.map((item) => (item.link
            ? (
              <Link href={item.link} className={`${s.footerLink} ${s.greyItem}`}>
                {item.label}
              </Link>
            )
            : (
              <div key={item.label} className={s.greyItem}>
                {item.label}
              </div>
            )))}
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={s.footerItem}>
          <Typography className={`fontWeightBold ${s.heading}`}>Learn</Typography>
          {Learn.map((item) => <div key={item} className={s.greyItem}>{item}</div>)}
        </Grid>
        <Grid item xs={12} md={3} className={s.footerItem}>
          <Typography className={`fontWeightBold ${s.heading}`}>Social</Typography>
          <div>
            {Social.map((item) => <img src={item} alt="" key={`${item}`} className={s.footerSocialImage} />)}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
