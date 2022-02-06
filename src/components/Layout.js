import React from 'react';
import './Layout.css';

const Layout = ({ children, length }) => {
  return (
    <div className='Layout'>
      <div className='title'>오늘의 할 일 ({length})</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
