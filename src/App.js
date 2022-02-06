import React from 'react';
import './App.css';
import Layout from './components/Layout.js';
import Todolist from './components/Todo_List.js';
import TodoInsert from './components/TodoInsert.js';
import { MdAddCircle } from 'react-icons/md';

function App() {
  const [insertToggle, setInsertToggle] = React.useState(false);
  const [todoID, setTodoID] = React.useState(4);
  const [todos, setTodos] = React.useState([
    { id: 1, text: '할일 1', checked: true },
    { id: 2, text: '할일 2', checked: false },
    { id: 3, text: '할일 3', checked: true },
  ]);
  const handleInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };
  const onInputSubmit = (insertValue) => {
    if (insertValue === '') {
      return alert('할 일을 입력해주세요');
    }
    const todo = {
      id: todoID,
      text: insertValue,
      checked: false,
    };
    setTodos((prev) => [...todos, todo]);
    setTodoID((prev) => prev + 1);
  };
  const onCheckToggle = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    });
  };
  return (
    <div className='App'>
      <Layout length={todos.length}>
        <Todolist todos={todos} onCheckToggle={onCheckToggle} />
        <div className='add-todo-button' onClick={handleInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            onInsertToggle={handleInsertToggle}
            onInputSubmit={onInputSubmit}
          />
        )}
      </Layout>
    </div>
  );
}

export default App;
