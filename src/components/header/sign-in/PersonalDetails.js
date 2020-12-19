import React from 'react';
import Button from 'components/button';
import FormFields from 'components/form-fields';
import personalDetailFields from 'constants/personalDetailFields';
import s from './SignIn.module.scss';

export default function PersonalDetails(props) {
  const { setActiveStep } = props;

  return (
    <div className={s.personalDetails}>
      {personalDetailFields.map((field) => (
        <FormFields fieldDetails={field} formKey="personalDetails" />
      ))}
      <Button
        title="Proceed"
        variant="primary"
        onClick={() => {
          setActiveStep('identityVerification');
        }}
        className={s.proceedBtn}
      />
    </div>
  );
}
