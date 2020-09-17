import React from 'react';
import { Grid } from '@material-ui/core';

export default function ContentByType({ item }) {
  let view = null;

  const { type, content, className } = item;

  if (type === 'li') {
    view = <li className={className}>{content}</li>;
  } else if (type === 'headLine') {
    view = (
      <Grid
        item
        xs={12}
        alignItems="center"
        className="CryptoForNewbiesHeadLine"
        style={{ minHeight: '53px', height: 'auto', display: 'flex' }}
      >
        {content}
      </Grid>
    );
  } else if (type === 'question') {
    view = <div className={`historyQuestion ${className}`}>{content}</div>;
  } else if (type === 'answer') {
    view = <div className={`historyAnswer ${className}`}>{content}</div>;
  } else if (type === 'question2') {
    view = <div className="advantagesText2">{content}</div>;
  } else if (type === 'abbreviation' || type === 'liAbbreviation') {
    view = (
      <li className="advantagesText3">
        <span className="advantagesHeading">
          {item.word}
          {' '}
        </span>
        {content}
      </li>
    );
    // if (type === 'liAbbreviation') {
    //   view = <li>{view}</li>;
    // }
  } else if (type === 'keyHeading') {
    view = <div className="advantagesText1">{content}</div>;
  }

  return (<div>{view}</div>);
}
