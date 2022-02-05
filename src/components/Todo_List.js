import React from 'react';
import TodoItem from './Todo_Item';

const Todolist = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todolist;
