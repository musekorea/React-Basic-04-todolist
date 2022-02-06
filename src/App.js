import React from 'react';
import './App.css';
import Layout from './components/Layout.js';
import Todolist from './components/Todo_List.js';
import { MdAddCircle } from 'react-icons/md';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: '할일 1', checked: true },
    { id: 2, text: '할일 2', checked: false },
    { id: 3, text: '할일 3', checked: true },
  ]);
  return (
    <div className='App'>
      <Layout>
        <Todolist todos={todos} />
        <div className='add-todo-button'>
          <MdAddCircle />
        </div>
      </Layout>
    </div>
  );
}

export default App;
