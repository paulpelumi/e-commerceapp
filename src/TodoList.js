import React, { useState } from 'react';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [outputValues, setOutputValues] = useState([]);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setOutputValues([...outputValues,...inputValue]);
    setInputValue('');
    console.log(outputValues)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {outputValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
