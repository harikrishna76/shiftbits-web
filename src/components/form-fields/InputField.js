import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import formFieldStateHandler from './formFieldStateHandler';
import FileButtonOnly from './FileButtonOnly';

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
    const inputLabelProps = {
      required: false,
    };
    if (['file', 'date'].includes(fieldDetails.type)) {
      inputLabelProps.shrink = true;
    }
    return inputLabelProps;
  };

  const fieldKey = formKey + fieldDetails.key;

  if (fieldDetails.type === 'file' && fieldDetails.buttonOnly) {
    return (
      <FileButtonOnly
        id={fieldKey}
        label={fieldDetails.label}
        accept={fieldDetails.accept}
        disabled={disabled}
        {...stateHandler}
      />
    );
  }

  return (
    <div>
      {fieldDetails.separateLabel && (
        <div className="fieldLabel">{fieldDetails.label}</div>
      )}
      <TextField
        name={fieldKey}
        label={!fieldDetails.separateLabel && fieldDetails.label}
        type={fieldDetails.type}
        id={fieldKey}
        accept={fieldDetails.accept}
        fullWidth={fieldDetails.fullWidth || true}
        required={!!fieldDetails.required}
        InputLabelProps={setInputLabelProps()}
        autoComplete={fieldDetails.autoComplete}
        disabled={disabled}
        variant="outlined"
        {...stateHandler}
      />
    </div>
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
