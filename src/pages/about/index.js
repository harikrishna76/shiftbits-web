import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Layout from 'components/layout';
import './About.module.scss';

const TEAM_MEMBERS = [
  { name: 'Saketha Pingali', role: 'CEO, CO-FOUNDER', imageSrc: './Team/CEO.png' },
  { name: 'Ram Budime', role: 'CBDO, CO-FOUNDER', imageSrc: './Team/CBDO.png' },
  { name: 'Jan Dreske', role: 'CTO', imageSrc: './Team/CTO.png' },
  { name: 'Ales Mercun', role: 'SR. BACKEND DEVELOPER', imageSrc: './Team/backend_developer.png' },
  { name: 'Hari Krishna Salver', role: 'MOBILE & WEB DEVELOPER', imageSrc: './Team/frontend_developer.png' },
  { name: 'Priyank Shah', role: 'UI/UX DESIGNER', imageSrc: './Team/designer.png' },
  { name: 'Apoorva Malladi', role: 'COPYWRITER', imageSrc: './Team/copywriter.png' },
];

export default function SpacingGrid() {
  return (
    <Layout activeTabIndex={1}>
      <Grid container alignItems="center" style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              borderRight: '1px solid #21bf73',
              padding: '4rem',
              paddingRight: '4rem',
              flexDirection: 'column',
              display: 'flex',
            }}
          >
            <div className="aboutUsTitle">about</div>
            <div className="aboutUsTitle">us</div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'right' }}>
            <img src="/images/conversation.png" width="80%" alt="" />
          </div>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} md={9} align="center">
          <Typography className="aboutUsText1">
            Because all of us here, betting that cryptocurrency could build a more sustainable global economy, are Satoshi. It is evident now more than ever that digital money is here to stay and cryptocurrency is gaining popularity among libertarians and investors alike. This is where we come in -
            <span style={{ color: '#21bf73' }}>
              {' '}
              ShiftBits is an online platform where you can not only buy and sell cryptocurrency but also spend it! Yes, you heard us right.
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" style={{ marginTop: '91px' }}>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'center' }}>
            <img src="/images/10 1.png" width="80%" alt="" />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            style={{
              paddingRight: '4rem',
              flexDirection: 'column',
              display: 'flex',
            }}
          >
            <Typography className="aboutUsText2">
              We are very excited to offer our crypto community extensive services and spending options that make living with Bitcoin and Ethereum assets extremely easy.
            </Typography>
            <Typography className="aboutUsText2">
              From gift cards for loved ones to eCommerce purchases, from eating at your favourite restaurants to investing in gold, your cryptocurrency can now buy everything.
            </Typography>
            <Typography className="aboutUsText2" style={{ marginBottom: 0 }}>
              Mind you, we are not a digital currency trading platform. ShiftBits has been launched with the primary intention of opening doors to crypto investment opportunities for individuals &; institutions and also to crypto adaption capabilities. We pride ourselves over the fact that our customers enjoy sole ownership of their crypto assets. We’re not the custodians, you are!
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={8} align="center">
          <div className="aboutUsText2">
            We pride ourselves over the fact that our customers enjoy sole ownership of their crypto assets. We’re not the custodians, you are!
          </div>
          <div className="aboutUsText3">
            It is crucial you understand why.
          </div>
          <div className="aboutUsText2">
            While neither Bitcoin nor Ethereum blockchains have ever been hacked, the same does not hold true for crypto exchanges. They are purpose-built to move assets from one account to another and are hence vulnerable and prone to the same security problems as all other websites.
          </div>
          <div className="aboutUsText2">
            Hackers have often attacked crypto exchange platforms in the past because they are rewarding targets – there were 12 significant hacks in 2019 alone. We can safely conclude that exchanges should not be holding customer assets.
            To sum up, if you wouldn’t trust a random guy on the street with your money, you shouldn’t
            do that with your exchange either.
          </div>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: '4rem' }}>
        <Grid item xs={12} md={8} align="center">
          <div className="aboutUsText3">
            “So why just two digital assets to invest in, you ask?”
          </div>
          <div className="aboutUsText2">
            There are more than 5000 estimated cryptocurrencies in existence today, including some bizarrely named altcoins such as PizzaCoin, Coinye and Cabbage! We at ShiftBits selected the two most promising digital currencies the world is banking on. Not only did we personally trust our finances with Bitcoin and Ethereum, but we also advise our clientele to do that same. Bold of us, we know! So we urge you to start building your crypto portfolio right away to stay in the race. As they say, crypto trading is not about making money; it is about replacing money!
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="aboutUsText4Banner"
        style={{ marginTop: '4rem' }}
      >
        <Grid item xs={12} md={10} align="center">
          <div className="aboutUsText4">
            As they say, crypto trading is not about making money, it is about replacing money!
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: '4rem' }}
      >
        <Grid item xs={12} md={8} lg={11} align="center">
          <Typography className="aboutUsText5">Meet the team</Typography>
          <Typography className="aboutUsText2">
            Get closer to us by knowing all the contributing members of this team.
            <br />
            {' '}
            We will build the future!
          </Typography>
          <div className="center teamMembersContainer">
            {TEAM_MEMBERS.map((item) => (
              <div key={item.name} className="teamMemberCard">
                <div>
                  <img src={item.imageSrc} alt="" className="teamMemberImage" />
                </div>
                <div className="memberName">{item.name}</div>
                <div className="memberRole">{item.role}</div>
                {/* <div className="flex">
                  <img src="./linkedin.png" alt="" className="teamSocialIcon"></img>
                  <img src="./twitter.png" alt="" className="teamSocialIcon"></img>
                </div> */}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
