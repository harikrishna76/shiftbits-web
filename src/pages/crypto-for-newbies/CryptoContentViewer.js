import React from 'react';
import { Grid } from '@material-ui/core';
import content from 'constants/CryptoForNewbiesContent';
import ContentByType from './ContentByType';
import s from './CryptoForNewbies.module.scss';

export default function CryptoContentViewer(props) {
  const { pageKey } = props;

  const { pageData, contents } = content[pageKey] || {};

  function displayDataSet(dataSet) {
    if (dataSet.data && dataSet.data.length) {
      if (dataSet.type === 'content') {
        return (dataSet.data || []).map((item) => <ContentByType item={item} />);
      } if (dataSet.type === 'boxedContent') {
        return (
          <div className={s.basicKeyQuestions}>
            {dataSet.data.map((item) => <ContentByType item={item} />)}
          </div>
        );
      }
    }
    return null;
  }

  return (
    <Grid container justify="center">
      <Grid container justify="space-between" className="flex" xs={12} md={9}>
        <Grid item xs={12} md={8}>
          <ul className={s.CryptoForNewbiesUL}>
            <Grid item xs={12}>
              {pageData.map((dataSet) => displayDataSet(dataSet))}
            </Grid>
          </ul>
        </Grid>
        {contents
          ? (
            <Grid item xs={12} md={3}>
              <div className={s.contentContainer}>
                <div className={`fontSize24 fontWeightBold ${s.contentsHeading}`}>Contents</div>
                {contents.map((item) => (
                  <div className={s.contentItem} key={item}>{item}</div>
                ))}
              </div>
            </Grid>
          ) : null}
      </Grid>
    </Grid>
  );
}
