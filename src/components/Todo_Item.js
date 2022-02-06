import React from 'react';
import './Todo_Item.css';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const TodoItem = ({ todo, onCheckToggle }) => {
  const { id, text, checked } = todo;
  const handleClick = (e) => {
    onCheckToggle(id);
  };
  return (
    <div className='TodoItem'>
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <MdCheckBox onClick={handleClick} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={handleClick} />
        )}
        <div className='text'>{todo.text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
