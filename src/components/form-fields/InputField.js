import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import formFieldStateHandler from './formFieldStateHandler';

export default function TextFieldElement(props) {
  const {
    fieldDetails,
    value,
    updateFormData,
    errorMessage,
    formKey,
    disabled,
  } = props;

  const stateHandler = formFieldStateHandler({
    key: fieldDetails.key,
    value,
    updateFormData,
    error: errorMessage,
  });

  const setInputLabelProps = () => {
    const inputLabelProps = {};
    if (['file', 'date'].includes(fieldDetails.type)) {
      inputLabelProps.shrink = true;
    }
    return inputLabelProps;
  };

  const fieldKey = formKey + fieldDetails.key;

  return (
    <TextField
      name={fieldKey}
      label={fieldDetails.label}
      type={fieldDetails.type}
      id={fieldKey}
      accept={fieldDetails.accept}
      fullWidth={fieldDetails.fullWidth || true}
      required={!!fieldDetails.required}
      InputLabelProps={setInputLabelProps()}
      autoComplete={fieldDetails.autoComplete}
      disabled={disabled}
      {...stateHandler}
    />
  );
}

TextFieldElement.propTypes = {
  fieldDetails: PropTypes.objectOf.isRequired,
  updateFormData: PropTypes.func.isRequired,
  formKey: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
};

TextFieldElement.defaultProps = {
  errorMessage: null,
  disabled: false,
};
