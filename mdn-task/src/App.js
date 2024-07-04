import React from 'react';
import FormComponent from './components/InputForm/index';
import TextComponent from './components/CutText/index';
import InputNumber from './components/InputNumber/index';

const App = () => {
  const sampleText = "Это первое предложение. Это второе предложение. Это третье предложение. Это четвертое предложение.";

  return (
    <div>
      <h1>main</h1>
      <FormComponent />
      <TextComponent text={sampleText} />
      <InputNumber />
    </div>
  );
};

export default App;
