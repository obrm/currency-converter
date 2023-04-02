/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useCallback } from 'react';

import { API_URL } from '../constants/api_url';
import { DEFAULT_CURRENCY_1, DEFAULT_CURRENCY_2 } from '../constants/currencies';

const useCurrencyConverter = () => {
  const [currencyOne, setCurrencyOne] = useState(DEFAULT_CURRENCY_1);
  const [currencyTwo, setCurrencyTwo] = useState(DEFAULT_CURRENCY_2);
  const [inputTwo, setInputTwo] = useState('');
  const [rate, setRate] = useState('');
  const [show, setShow] = useState(false);

  const inputOneRef = useRef('');

  useEffect(() => {
    inputOneRef.current.focus();
    calculate();
  }, [currencyOne, currencyTwo]);

  const handleAmountOneChange = useCallback((event) => {
    inputOneRef.current = event.target.value;
    calculate();
    setShow(true);
  }, []);

  const handleAmountTwoChange = useCallback((event) => {
    setInputTwo(event.target.value);
  }, []);

  const handleCurrencyOneChange = useCallback((event) => {
    setCurrencyOne(event.target.value);
  }, []);

  const handleSwapClick = useCallback(() => {
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(inputOneRef.current === '' ? DEFAULT_CURRENCY_2 : currencyOne);
    inputOneRef.current = inputTwo === '' ? '' : inputTwo;
    calculate();
  }, [currencyOne, currencyTwo, inputTwo]);

  const handleClearClick = useCallback(() => {
    inputOneRef.current = '';
    setInputTwo('');
    setShow(false);
  }, []);

  const calculate = useCallback(async () => {
    const res = await fetch(`${API_URL}${currencyOne}`);
    const { rates } = await res.json();
    const curr2Rate = rates[currencyTwo];
    setRate(`1 ${currencyOne} = ${curr2Rate} ${currencyTwo}`);
    setInputTwo((Number(inputOneRef.current) * curr2Rate).toFixed(2));
  }, [currencyOne, currencyTwo]);


  return {
    currencyOne,
    currencyTwo,
    inputTwo,
    rate,
    show,
    inputOneRef,
    setCurrencyTwo,
    handleAmountOneChange,
    handleAmountTwoChange,
    handleCurrencyOneChange,
    handleSwapClick,
    handleClearClick,
  };
};

export default useCurrencyConverter;