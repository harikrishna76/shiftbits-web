import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputField from 'components/form-fields/InputField';
import DateTypeField from 'components/form-fields/DateTypeField';
import SelectField from 'components/form-fields/SelectField';
import CheckBox from './CheckBox';
import s from './FormFields.module.scss';

export default function FormFields(props) {
  const { fieldDetails, formKey, className } = props;

  const fieldsByTypes = {
    date: DateTypeField,
    select: SelectField,
    file: InputField,
    checkbox: CheckBox,
  };

  const Field = fieldsByTypes[fieldDetails.type] || InputField;

  return (
    <Grid
      item
      xs={12}
      sm={fieldDetails.halfWidth ? 6 : 12}
      key={formKey + fieldDetails.key}
      className={`${s.root} ${className}`}
    >
      <Field {...props} />
    </Grid>
  );
}

FormFields.propTypes = {
  fieldDetails: PropTypes.objectOf.isRequired,
  formKey: PropTypes.string.isRequired,
};
