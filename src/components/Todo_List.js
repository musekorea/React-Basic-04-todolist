import React from 'react';
import './Todo_List.css';
import TodoItem from './Todo_Item';

const Todolist = ({ todos, onCheckToggle, onDelete, onEdit }) => {
  return (
    <div className='Todolist'>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default Todolist;
