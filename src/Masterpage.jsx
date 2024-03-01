import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import LoginForm from './Login';

const Masterpage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/App' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Masterpage;
