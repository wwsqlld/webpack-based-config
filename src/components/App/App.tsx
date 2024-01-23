import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {

  return (
    <div className='app'>
      <h1>Hallo</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/shop'>Shop</Link>
      <Outlet />
    </div>
  )
}

