import {useEffect, useState} from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setdDbouncedValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setdDbouncedValue(input);
    }, time);

    return () => clearTimeout(timer);
  }, [input]);

  return debouncedValue;
};
