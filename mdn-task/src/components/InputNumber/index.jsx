import React, { useState } from 'react';
import { InputNumberContainer, InputField } from './styles';
import Message from './message';

const InputNumber = () => {
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const parsedNumber = parseFloat(number);

  return (
    <InputNumberContainer>
      <InputField
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Введите число"
      />
      <Message number={parsedNumber} />
    </InputNumberContainer>
  );
};

export default InputNumber;
