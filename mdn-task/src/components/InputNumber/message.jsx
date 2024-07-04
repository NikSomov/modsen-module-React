import React from 'react';

const Message = ({ number }) => {
  if (isNaN(number)) {
    return <p>Пожалуйста, введите корректное число.</p>;
  }

  return (
    <p>{number > 0 ? 'Число больше нуля' : 'Число меньше нуля'}</p>
  );
};

export default Message;
