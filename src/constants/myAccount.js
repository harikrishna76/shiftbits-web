export const accountDetailsFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    key: 'fullName',
    required: true,
    type: 'text',
    value: 'Andy Jhones',
    separateLabel: true,
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    key: 'dateOfBirth',
    required: true,
    type: 'date',
    value: new Date('01-19-1980'),
    format: 'dd MMMM yyyy',
    separateLabel: true,
  },
  {
    name: 'email',
    label: 'Email',
    key: 'email',
    required: true,
    type: 'text',
    value: 'andyjhones@xyz.com',
    separateLabel: true,
  },
];

export const bankDetailsFields = [
  {
    label: 'Account no.',
    key: 'accountNumber',
    required: true,
    type: 'text',
    value: '1234567890',
    separateLabel: true,
  },
  {
    label: 'Re-enter account no.',
    key: 'accountNumberReplica',
    required: true,
    type: 'text',
    value: '1234567890',
    separateLabel: true,
  },
  {
    label: 'IFSC code',
    key: 'ifsc',
    required: true,
    type: 'text',
    value: 'XXXX0YYYYYY',
    separateLabel: true,
  },
  {
    label: 'UPI id',
    key: 'upi',
    required: true,
    type: 'text',
    value: 'xyz@okicici',
    separateLabel: true,
  },
];

export const kycFields = {
  picture: {
    label: 'Change picture',
    key: 'picture',
    required: true,
    type: 'file',
    buttonOnly: true,
  },
  verificationType: {
    label: 'Select verification type',
    key: 'verificationType',
    type: 'select',
    options: [
      { value: 'passport', label: 'Passport' },
      { value: 'driversLicense', label: "Driver's license" },
      { value: 'aadhar', label: 'Aadhar Card' },
    ],
    defaultValue: 'etheriom',
  },
  documents: [
    {
      label: 'Upload front',
      key: 'front',
      required: true,
      type: 'file',
      buttonOnly: true,
    },
    {
      label: 'Upload back',
      key: 'back',
      required: true,
      type: 'file',
      buttonOnly: true,
    },
  ],
};
