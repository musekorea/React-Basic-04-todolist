import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className='Layout'>
      <div className='title'>
        오늘의 할 일 ({children[0].props.todos.length})
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
