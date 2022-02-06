import React, { useState } from 'react';
import './TodoEdit.css';

const TodoEdit = ({ todo, editState, onEdit, toggleEditState }) => {
  const [editValue, setEditValue] = React.useState(todo.text);
  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTodo = { id: todo.id, text: editValue, checked: todo.checked };
    onEdit(editedTodo);
    toggleEditState();
  };
  const handleEdit = (e) => {
    const editedTodo = { id: todo.id, text: editValue, checked: todo.checked };
    onEdit(editedTodo);
    toggleEditState();
  };
  const handleCancel = (e) => {
    toggleEditState();
  };
  return (
    <div className='editTodo'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={editValue} onChange={handleInputChange} />
      </form>
      <div className='buttonBox'>
        <button className='cancelBtn' onClick={handleCancel}>
          Cancel
        </button>
        <button className='okBtn' onClick={handleEdit}>
          OK
        </button>
      </div>
    </div>
  );
};

export default TodoEdit;
