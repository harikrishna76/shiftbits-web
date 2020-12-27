import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from 'components/button';
import s from './SignIn.module.scss';

export default function Verification(props) {
  const { setActiveStep } = props;

  const [otp, setOTP] = useState('');

  return (
    <div className={`${s.verification} center flexColumn `}>
      <div className={`${s.textType1} ${s.textType2}`}>
        Please enter the 4-digit code sent to your mobile number +91 xxxx-xxxx12
      </div>
      <div className={s.verificationCode}>
        <OtpInput
          value={otp}
          onChange={(input) => setOTP(input)}
          numInputs={4}
          inputStyle={s.otpInput}
          shouldAutoFocus
        />
      </div>
      <div className={`${s.textType1} ${s.resendLink}`}>
        Didn’t recieve code? <span className="pointer">Resend code</span>
      </div>
      <div
        role="presentation"
        onClick={() => {
          setActiveStep('createAccount');
        }}
        className={`${s.textType1} ${s.textType2} ${s.useAnotherNumber} pointer`}
      >
        Use another phone number
      </div>
      <Button
        title="Submit"
        variant="primary"
        onClick={() => {
          setActiveStep('personalDetails');
        }}
      />
    </div>
  );
}
