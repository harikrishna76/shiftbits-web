import { getDefaultValuesForFormFields } from 'utils/helpers';

const fields = [
  {
    label: 'Select currency',
    key: 'currency',
    type: 'select',
    options: [
      { value: 'bitcoin', label: 'Bitcoin' },
      { value: 'etheriom', label: 'Etheriom' },
    ],
    defaultValue: 'etheriom',
  },
  {
    label: 'Select amount',
    key: 'amount',
    type: 'select',
    options: [
      { value: 'bitcoin', label: '500' },
      { value: 'etheriom', label: '1000' },
    ],
    defaultValue: 'etheriom',
  },
];

const defaultValues = getDefaultValuesForFormFields(fields);

export default { fields, defaultValues };
