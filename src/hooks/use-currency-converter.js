/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

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
  }, []);

  useEffect(() => {
    calculate();
  }, [currencyOne, currencyTwo]);

  const handleAmountOneChange = (event) => {
    inputOneRef.current = event.target.value;
    calculate();
    setShow(true);
  };

  const handleAmountTwoChange = (event) => {
    setInputTwo(event.target.value);
  };

  const handleCurrencyOneChange = (event) => {
    setCurrencyOne(event.target.value);
  };

  const handleSwapClick = () => {
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(inputOneRef.current === '' ? DEFAULT_CURRENCY_2 : currencyOne);
    inputOneRef.current = inputTwo === '' ? '' : inputTwo;
    calculate();
  };

  const handleClearClick = () => {
    inputOneRef.current = '';
    setInputTwo('');
    setShow(false);
  };

  const calculate = async () => {
    const res = await fetch(`${API_URL}${currencyOne}`);
    const data = await res.json();
    const curr2Rate = data.rates[currencyTwo];
    setRate(`1 ${currencyOne} = ${curr2Rate} ${currencyTwo}`);
    setInputTwo((Number(inputOneRef.current) * curr2Rate).toFixed(2));
  };

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