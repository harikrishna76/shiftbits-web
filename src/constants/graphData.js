const DATA = {
  bitcoin: {
    key: 'bitcoin',
    title: 'Bitcoin',
    abbreviation: 'BTC',
    icon: '/images/bitcoin.svg',
    currencyOptions: {
      INR: {
        key: 'INR',
        label: 'INR',
        price: '6,64,098.68',
        change: '+16.4',
        symbol: '₹',
      },
      USD: {
        key: 'USD',
        label: 'USD',
        price: '7,555.9',
        change: '+18.3',
        symbol: '$',
      },
    },
    graphData: {
      '1D': {
        key: '1D',
        label: '1D',
        data: [5000, 1000, 4000, 5000, 2400, 5000, 2000, 3500],
      },
      '1W': {
        key: '1W',
        label: '1W',
        data: [9000, 1000, 4000, 4000, 4400, 8500, 9100, 3500],
      },
      '1M': {
        key: '1M',
        label: '1M',
        data: [5000, 6000, 4000, 4000, 2400, 1500, 9100, 5300],
      },
      '1Y': {
        key: '1Y',
        label: '1Y',
        data: [5000, 1000, 4000, 2400, 8500, 9100, 3500, 5300],
      },
      '5Y': {
        key: '5Y',
        label: '5Y',
        data: [5000, 1000, 4000, 2400, 8500, 9100, 3500, 5300],
      },
      Max: {
        key: 'Max',
        label: 'Max',
        data: [9000, 1000, 4000, 4000, 4400, 8500, 9100, 3500],
      },
    },
  },
  ethereum: {
    key: 'ethereum',
    title: 'Ethereum',
    abbreviation: 'ETH',
    icon: '/images/ethereum.svg',
    currencyOptions: {
      INR: {
        key: 'INR',
        label: 'INR',
        price: '4,67,844.87',
        change: '+6.4',
        symbol: '₹',
      },
      USD: {
        key: 'USD',
        label: 'USD',
        price: '7,555.9',
        change: '+8.3',
        symbol: '$',
      },
    },
    graphData: {
      '1D': {
        key: '1D',
        data: [5000, 1000, 4000, 9500, 4000, 2400, 8500, 9100, 3500],
      },
      '1W': {
        key: '1W',
        data: [9000, 1000, 4000, 9500, 4000, 4400, 8500, 9100, 3500],
      },
      '1M': {
        key: '1M',
        data: [5000, 6000, 4000, 9500, 4000, 2400, 1500, 9100, 5300],
      },
      '1Y': {
        key: '1Y',
        data: [5000, 1000, 4000, 9500, 2400, 8500, 9100, 3500, 5300],
      },
      '5Y': {
        key: '5Y',
        data: [5000, 1000, 4000, 9500, 2400, 8500, 9100, 3500, 5300],
      },
      Max: {
        key: 'Max',
        data: [9000, 1000, 4000, 9500, 4000, 4400, 8500, 9100, 3500],
      },
    },
  },
};

export default DATA;
