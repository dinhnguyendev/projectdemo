import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../layout/Login';
import Main from '../layout/Main';
function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
