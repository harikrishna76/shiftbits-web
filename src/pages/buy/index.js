import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import Arrow from 'components/icons/arrow';
import DATA from 'constants/graphData';
import s from './Buy.module.scss';

const variations = [
  { label: 'Market cap' },
  { label: 'High', icon: <Arrow color="green" /> },
  {
    label: 'Low',
    icon: <Arrow color="red" direction="down" />,
  },
  { label: 'Change' },
];

export default function Buy() {
  const [activeGraphPoint, setActiveGraphPoint] = useState('1D');

  const [activeTab, setActiveTab] = useState('bitcoin');

  const [activeCurrency, setActiveCurrency] = useState('INR');

  const displayGraphCard = () => {
    const cryptocurrency = DATA[activeTab];
    return (
      <Grid className={s.graphCard}>
        <div className="spaceBetween">
          {activeTab === 'bitcoin' ? (
            <div className="center">
              <img src="/images/bitcoin2.png" alt="" />
              <div>Bitcoin BTC</div>
            </div>
          ) : (
            <div>
              <img src="/images/bitcoin2.png" alt="" />
            </div>
          )}
          <div className="center">
            {Object.keys(cryptocurrency.graph_data).map((item) => (
              <div
                style={{
                  backgroundColor: activeGraphPoint === item ? '#21bf73' : '',
                }}
                className={s.graphPointBox}
                onClick={() => {
                  setActiveGraphPoint(item);
                }}
                role="presentation"
              >
                <div
                  className={s.fontSize14}
                  style={{
                    color: activeGraphPoint === item ? '#ffffff' : '#bababc',
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="spaceAround">
          {variations.map((variation) => (
            <div>
              <div className="center">
                {variation.icon && (
                  <div className={s.variationIcon}>{variation.icon}</div>
                )}
                <div className="fontWeightBold greyText">{variation.label}</div>
              </div>
              <div variant="p116Px">
                {cryptocurrency.currencyOptions[activeCurrency].symbol}{' '}
                {cryptocurrency.currencyOptions[activeCurrency].price}
              </div>
            </div>
          ))}
        </div>
      </Grid>
    );
  };

  const displayIdentityVerificationCard = () => (
    <Grid
      item
      xs={12}
      lg={7}
      justify="flex-end"
      className={s.identityVerificationCard}
    >
      <img src="images/identity_verification.svg" alt="" />
      <div className="fontWeightBold fontSize24">
        Complete Identity Verification
      </div>
      <div className="greyText">
        Please complete the identity verification as we need some additional
        information to authenticate your account.
      </div>
      <div className={`${s.submitButton} center`}>
        <div className="fontWeightBold">Submit</div>
      </div>
    </Grid>
  );

  return (
    <ProductLayout activeNavigation="buy">
      <Grid container style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'center' }}>buy</div>
        </Grid>
        <Grid item xs={12} md={6}>
          {displayGraphCard()}
          <Grid className="flex" justify="flex-end">
            {displayIdentityVerificationCard()}
          </Grid>
        </Grid>
      </Grid>
    </ProductLayout>
  );
}
