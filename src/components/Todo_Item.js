import React, { useState } from 'react';
import './Todo_Item.css';
import TodoEdit from './TodoEdit.js';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

const TodoItem = ({ todo, onCheckToggle, onDelete, onEdit }) => {
  const { id, text, checked } = todo;
  const [editState, setEditState] = React.useState(false);
  const handleCheckToggle = (e) => {
    onCheckToggle(id);
  };
  const handleDelete = (e) => {
    onDelete(id);
  };
  const handleEdit = (e) => {
    setEditState((prev) => !prev);
  };
  const toggleEditState = (editState) => {
    setEditState((prev) => !prev);
  };
  return (
    <div className='TodoItem'>
      {editState ? (
        <TodoEdit
          todo={todo}
          editState={editState}
          onEdit={onEdit}
          toggleEditState={toggleEditState}></TodoEdit>
      ) : (
        <div className={`content ${checked ? 'checked' : ''}`}>
          {checked ? (
            <MdCheckBox onClick={handleCheckToggle} />
          ) : (
            <MdCheckBoxOutlineBlank onClick={handleCheckToggle} />
          )}
          <div className='text'>
            <span>{todo.text}</span>
            <div className='buttonBox'>
              <button>
                <MdModeEdit onClick={handleEdit} />
              </button>
              <button>
                <MdDeleteForever onClick={handleDelete} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
