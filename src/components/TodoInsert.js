import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsertToggle, onInputSubmit }) => {
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    onInputSubmit(value);
    setValue('');
    onInsertToggle();
  };
  return (
    <div>
      <div className='modal-background' onClick={onInsertToggle}></div>
      <form className='addTodoForm' onSubmit={handleInputSubmit}>
        <input type='text' value={value} onChange={handleInputChange} />
        <button type='Submit'>
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
