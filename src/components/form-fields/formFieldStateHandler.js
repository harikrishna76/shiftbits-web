import { useState, useEffect } from 'react';
import { isValue } from 'utils/helpers';

export default function formFieldStateHandler(props) {
  const { key, updateFormData = () => {}, type } = props;

  const [value, setValue] = useState(props.value); // eslint-disable-line

  const [error, setError] = useState(props.error); // eslint-disable-line

  useEffect(() => { // eslint-disable-line
    setValue(props.value);
  }, [props.value]);

  useEffect(() => { // eslint-disable-line
    setError(props.error);
  }, [props.error]);

  return {
    value,
    error: !!error,
    helperText: error,
    onChange: (event) => {
      let newValue = event && event.target ? event.target.value : '';
      if (type === 'date') {
        newValue = event;
      }
      setValue(newValue);
      if (props.error && isValue(newValue)) {
        setError(null);
      }
      updateFormData(key, newValue);
    },
  };
}
