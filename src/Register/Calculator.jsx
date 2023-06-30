import React, { useState } from 'react';
import '../Calculator.css';
const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const handleClear = () => {
    setResult('');
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(result);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button operator" onClick={() => handleClick('/')}>/</button>
        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button operator" onClick={() => handleClick('*')}>*</button>
        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button operator" onClick={() => handleClick('-')}>-</button>
        <button className="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button equal" onClick={handleEqual}>=</button>
        <button className="button operator" onClick={() => handleClick('+')}>+</button>
        <button className="button clear" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
