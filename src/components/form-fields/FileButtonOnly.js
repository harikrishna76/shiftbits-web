/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/button';
import s from './FormFields.module.scss';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
}));

export default function FileButtonOnly(props) {
  const classes = useStyles();

  const { id, label } = props;

  return (
    <div className={s.fileButtonOnly}>
      <label htmlFor={id} className="flex">
        <input className={classes.input} type="file" {...props} />
        <span className={`${s.button} center pointer`}>{label}</span>
      </label>
    </div>
  );
}
