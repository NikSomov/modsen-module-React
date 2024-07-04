import React, { useRef } from 'react';
import { Form, InputField, Button } from './styles';

const FormComponent = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputField">Введите текст: </label>
        <InputField id="inputField" type="text" ref={inputRef} />
      </div>
      <Button type="submit">Отправить</Button>
    </Form>
  );
};

export default FormComponent;
