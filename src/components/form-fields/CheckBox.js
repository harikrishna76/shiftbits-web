import React from 'react';
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import formFieldStateHandler from './formFieldStateHandler';

const GreenCheckbox = withStyles({
  root: {
    color: '#BABABC',
    '&$checked': {
      color: '#21bf73',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckBox(props) {
  const {
    fieldDetails,
    value,
    updateFormData,
    errorMessage,
    formKey,
    label,
  } = props;

  console.log('label', label);

  const stateHandler = formFieldStateHandler({
    key: fieldDetails.key,
    value,
    updateFormData,
    type: fieldDetails.type,
    error: errorMessage,
  });

  const fieldKey = formKey + fieldDetails.key;

  return (
    <div key={fieldKey} className="flex alignCenter">
      <GreenCheckbox
        checked={stateHandler.value}
        onChange={stateHandler.onChange}
        color="red"
      />
      {label || fieldDetails.label}
    </div>
  );
}
