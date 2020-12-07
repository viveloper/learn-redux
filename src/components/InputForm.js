import React, { useState } from 'react';

let count = 0;

function InputForm({ store }) {
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: 'ADD_TODO',
      todo: {
        id: count++,
        text: value,
      },
    });
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputForm;
