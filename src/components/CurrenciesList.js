import React from 'react';

const CurrenciesList = ({ currency, handleChange, currencies = [] }) => {
  return (
    <select value={currency} onChange={handleChange}>
      {currencies.map(({ value }) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default CurrenciesList;
