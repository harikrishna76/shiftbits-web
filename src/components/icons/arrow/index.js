/**
 * @format
 * @flow
 */

import React from 'react';

const Arrow = props => {
  const {direction} = props;
  const setDirection = () => {
    if (direction === 'down') {
      return [{rotate: '180deg'}];
    }
  };

  return (
    <div style={direction && {transform: setDirection()}}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14L12 9L17 14H7Z" fill={props.color || 'black'} />
      </svg>
    </div>
  );
};

export default Arrow;
