import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
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
  const { activeCrypto, activeCurrency } = props;

  const [activeGraphPoint, setActiveGraphPoint] = useState('1D');

  const cryptoCurrency = DATA[activeCrypto] || {};

  const currencyData = cryptoCurrency.currencyOptions[activeCurrency];

  const renderHeaderSection = () => {
    return (
      <div className={s.headerSection}>
        <div>
          <div className="spaceBetween">
            <div className={`${s.currencyName} center`}>
              <img src={cryptoCurrency.icon} alt="" width={28} height={28} />
              <div>
                {cryptoCurrency.title} {cryptoCurrency.abbreviation}
              </div>
            </div>
            <div className="center">
              {Object.keys(cryptoCurrency.graphData).map((item) => (
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
        </div>
        <div className={s.priceSummarySection}>
          <div className={s.priceSummary}>
            {currencyData.symbol} {currencyData.price}
          </div>
          <div className={s.priceChange}>{currencyData.change}%</div>
        </div>
      </div>
    );
  };

  const renderLineGraph = () => {
    const activeData = cryptoCurrency.graphData[activeGraphPoint];
    return (
      <div className={s.lineGraphWrapper}>
        <Line
          data={{
            labels: activeData.data.map((data, index) =>
              index === 0 ? '' : `${index + 1} PM`,
            ),
            datasets: [{ borderColor: '#21bf73', fill: false, ...activeData }],
          }}
          options={{
            legend: { display: false },
            bezierCurve: false,
            elements: { point: { radius: 0 }, line: { tension: 0 } },
            scales: {
              xAxes: [{ gridLines: { display: false, drawBorder: true } }],
              yAxes: [
                {
                  gridLines: { display: false, drawBorder: false, maxLines: 1 },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 4,
                    callback(label) {
                      switch (label) {
                        case 0:
                          return '';
                        default:
                          return label;
                      }
                    },
                  },
                },
              ],
            },
          }}
        />
        <div className={s.bottomLine} />
      </div>
    );
  };

  const renderVariations = () => {
    return (
      <div className={`${s.variations} spaceAround`}>
        {variations.map((variation) => (
          <div>
            <div className={`${s.labelText} center`}>
              {variation.icon && (
                <div className={s.variationIcon}>{variation.icon}</div>
              )}
              <div className="fontWeightBold greyText">{variation.label}</div>
            </div>
            <div variant="p116Px">
              {currencyData.symbol} {currencyData.price}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Grid className={s.graphCard}>
      {renderHeaderSection()}
      {renderLineGraph()}
      {renderVariations()}
    </Grid>
  );
}
