import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import formFieldStateHandler from './formFieldStateHandler';

export default function DateTypeField(props) {
  const { fieldDetails, value, updateFormData, errorMessage } = props;

  const stateHandler = formFieldStateHandler({
    key: fieldDetails.key,
    value,
    updateFormData,
    type: fieldDetails.type,
    error: errorMessage,
  });

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name={fieldDetails.key}
          label={fieldDetails.label}
          id={fieldDetails.key}
          fullWidth={fieldDetails.fullWidth || true}
          disablePast={fieldDetails.disablePast}
          disableFuture={fieldDetails.disableFuture}
          {...stateHandler}
          value={stateHandler.value || null}
          onChange={stateHandler.onChange}
          format="MM/dd/yyyy"
          KeyboardButtonProps={{ 'aria-label': 'change date' }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

DateTypeField.propTypes = {
  fieldDetails: PropTypes.objectOf.isRequired,
  updateFormData: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

DateTypeField.defaultProps = {
  errorMessage: null,
};
