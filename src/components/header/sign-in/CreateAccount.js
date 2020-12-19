import React from 'react';
import Button from 'components/button';
import FormFields from 'components/form-fields';
import CreateAccountFields from 'constants/createAccountFields';
import s from './SignIn.module.scss';

export default function CreateAccount(props) {
  const { setActiveStep } = props;

  const checkboxFields = [
    {
      className: s.acceptField,
      fieldDetails: { key: 'accept', type: 'checkbox' },
      label: (
        <div className={`${s.textType1}`}>
          I agree to the <span>User Agreement</span> and{' '}
          <span>Privacy Policy</span>.
        </div>
      ),
    },
    {
      className: s.promotionField,
      fieldDetails: { key: 'promotions', type: 'checkbox' },
      label: (
        <div className={`${s.textType1} ${s.promotionsText}`}>
          Check this if you don’t want to be the first to hear about the latest
          Shiftbits releases, rewards, promotions and discounts.
        </div>
      ),
    },
  ];

  return (
    <div className={s.createAccount}>
      {CreateAccountFields.map((field) => (
        <FormFields fieldDetails={field} formKey="createAccount" />
      ))}
      {checkboxFields.map((checkBox) => (
        <div className={checkBox.className}>
          <FormFields
            fieldDetails={checkBox.fieldDetails}
            formKey="createAccount"
            className={s.formField}
            label={checkBox.label}
          />
        </div>
      ))}
      <Button
        title="Create account"
        variant="primary"
        onClick={() => {
          setActiveStep('verificationCode');
        }}
      />
      <div className={`center padding1 ${s.signInLink}`}>
        Already have an account?
        <span className="pointer">{'  '}Sign in</span>
      </div>
    </div>
  );
}
