import React from 'react';
import './Todo_List.css';
import TodoItem from './Todo_Item';

const Todolist = ({ todos }) => {
  return (
    <div className='Todolist'>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todolist;
