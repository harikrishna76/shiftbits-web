import React, { useState } from 'react';
import Link from 'next/link';
import s from './SignIn.module.scss';

const verificationOptions = [
  {
    key: 'passport',
    image: '/images/passport.svg',
    activeImage: '/images/passport-active.svg',
    label: 'Passport',
  },
  {
    key: 'driversLicense',
    image: '/images/drivers-license.svg',
    activeImage: '/images/drivers-license-active.svg',
    label: "Driver's  License",
  },
  {
    key: 'aadhar',
    image: '/images/aadhar.svg',
    activeImage: '/images/aadhar-active.svg',
    label: 'Aadhar Card',
  },
];

export default function IdentityVerification() {
  // const { setActiveStep } = props;

  const [activeOption, setActiveOption] = useState('passport');

  return (
    <div className={`${s.identityVerification} center flexColumn `}>
      <div className={`${s.textType1} ${s.textType2}`}>
        Please select an option
      </div>
      <div>
        {verificationOptions.map((option) => (
          <div
            className={`flexColumn spaceBetween pointer ${s.option} ${
              activeOption === option.key ? s.activeOption : ''
            }`}
            role="presentation"
            onClick={() => setActiveOption(option.key)}
          >
            <img
              src={
                option.key === activeOption ? option.activeImage : option.image
              }
              alt=""
            />
            <div className={s.textType1}>{option.label}</div>
          </div>
        ))}
      </div>
      <div className={`${s.textType1} ${s.resendLink}`}>
        <Link href="/account">
          <span className="pointer">I’ll do it later </span>
        </Link>
      </div>
    </div>
  );
}
