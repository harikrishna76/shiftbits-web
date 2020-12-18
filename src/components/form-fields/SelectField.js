import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import formFieldStateHandler from './formFieldStateHandler';
import s from './FormFields.module.scss';

function IconComponent() {
  return (
    <div className={s.selectIcon}>
      <img src="/images/icons/mdi_keyboard_arrow_down.svg" alt="" />
    </div>
  );
}

/* example props
  {
    label: 'Default Association',
    key: 'defaultAssociation',
    halfWidth: true,
    type: 'select',
    options: [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' },
    ],
    defaultValue: false,
  }
*/

export default function SelectField(props) {
  const {
    fieldDetails,
    value,
    updateFormData,
    errorMessage,
    options: propOptions,
    disabled,
    variant,
  } = props;

  const { key, multiple } = fieldDetails;

  const stateHandler = formFieldStateHandler({
    key,
    value,
    updateFormData,
    error: errorMessage,
  });

  const options = fieldDetails.dynamicOptions
    ? propOptions
    : fieldDetails.options;

  return (
    <FormControl
      error={stateHandler.error}
      variant={variant || 'outlined'}
      className={s.selectFormControl}
    >
      <InputLabel id={`${key}-label`}>{fieldDetails.label}</InputLabel>
      <Select
        labelId={`${key}-label`}
        id={key}
        value={stateHandler.value}
        onChange={stateHandler.onChange}
        fullWidth
        multiple={multiple || false}
        disabled={disabled || !(options && options.length)}
        label={fieldDetails.label}
        IconComponent={() => <IconComponent />}
      >
        {(options || []).map((item) => {
          return (
            <MenuItem key={item.value || item.label} value={item.value}>
              {item.label || item.value}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{stateHandler.helperText}</FormHelperText>
    </FormControl>
  );
}

SelectField.propTypes = {
  fieldDetails: PropTypes.objectOf.isRequired,
  updateFormData: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf,
};

SelectField.defaultProps = {
  errorMessage: null,
  options: null,
};
