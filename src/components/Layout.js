import React from 'react';
import './Layout.css';

const Layout = ({ children, length }) => {
  return (
    <div className='Layout'>
      <div className='title'>Todolist ({length})</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
