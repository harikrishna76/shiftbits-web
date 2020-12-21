import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import DATA from 'constants/graphData';
import Arrow from 'components/icons/arrow';
import s from './CurrencyGraph.module.scss';

const variations = [
  { label: 'Market cap' },
  { label: 'High', icon: <Arrow color="green" /> },
  {
    label: 'Low',
    icon: <Arrow color="red" direction="down" />,
  },
  { label: 'Change' },
];

export default function CurrencyGraph(props) {
  const { activeTab, activeCurrency } = props;

  const [activeGraphPoint, setActiveGraphPoint] = useState('1D');

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
}
