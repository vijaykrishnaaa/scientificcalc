import React, { useState } from 'react';
import * as math from 'mathjs';
import './Calculator.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');

    const handleInput = (value) => {
        setExpression((prev) => prev + value);
    };

    const handleClear = () => {
        setExpression('');
        setResult('0');
    };

    const handleBackspace = () => {
        setExpression((prev) => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        if (!expression) return;
        try {
            const evalResult = math.evaluate(expression);
            setResult(String(evalResult));
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator-container">
            <div className="display">
                <div className="expression">{expression || ' '}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons-grid">
                <button onClick={() => handleInput('sin(')} className="btn function">sin</button>
                <button onClick={() => handleInput('cos(')} className="btn function">cos</button>
                <button onClick={() => handleInput('tan(')} className="btn function">tan</button>
                <button onClick={handleBackspace} className="btn function">C</button>
                
                <button onClick={() => handleInput('(')} className="btn function">(</button>
                <button onClick={() => handleInput(')')} className="btn function">)</button>
                <button onClick={() => handleInput('sqrt(')} className="btn function">√</button>
                <button onClick={() => handleInput('/')} className="btn operator">÷</button>
                
                <button onClick={() => handleInput('7')} className="btn">7</button>
                <button onClick={() => handleInput('8')} className="btn">8</button>
                <button onClick={() => handleInput('9')} className="btn">9</button>
                <button onClick={() => handleInput('*')} className="btn operator">×</button>

                <button onClick={() => handleInput('4')} className="btn">4</button>
                <button onClick={() => handleInput('5')} className="btn">5</button>
                <button onClick={() => handleInput('6')} className="btn">6</button>
                <button onClick={() => handleInput('-')} className="btn operator">−</button>

                <button onClick={() => handleInput('1')} className="btn">1</button>
                <button onClick={() => handleInput('2')} className="btn">2</button>
                <button onClick={() => handleInput('3')} className="btn">3</button>
                <button onClick={() => handleInput('+')} className="btn operator">+</button>

                <button onClick={handleClear} className="btn clear">AC</button>
                <button onClick={() => handleInput('0')} className="btn">0</button>
                <button onClick={() => handleInput('.')} className="btn">.</button>
                <button onClick={handleCalculate} className="btn equals">=</button>
            </div>
        </div>
    );
};

export default Calculator;

