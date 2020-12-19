import React, { useState } from 'react';
import Modal from 'components/modal';
import CreateAccount from './CreateAccount';
import VerificationCode from './VerificationCode';
import IdentityVerification from './IdentityVerification';
import PersonalDetails from './PersonalDetails';
import s from './SignIn.module.scss';

export default function SignIn(props) {
  const { open, onClose } = props;
  const [activeStep, setActiveStep] = useState('createAccount');

  const steps = {
    createAccount: {
      render: <CreateAccount setActiveStep={setActiveStep} />,
      header: 'Create new account',
    },
    verificationCode: {
      render: <VerificationCode setActiveStep={setActiveStep} />,
      header: 'Verification code',
    },
    personalDetails: {
      render: <PersonalDetails setActiveStep={setActiveStep} />,
      header: 'Personal Details',
    },
    identityVerification: {
      render: <IdentityVerification setActiveStep={setActiveStep} />,
      header: 'Identity Verification',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      header={steps[activeStep]?.header}
      bodyClassName={s.root}
    >
      {steps[activeStep]?.render}
    </Modal>
  );
}
