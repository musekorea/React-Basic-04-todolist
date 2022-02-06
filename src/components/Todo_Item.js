import React from 'react';
import './Todo_Item.css';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <div className='TodoItem'>
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{todo.text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
