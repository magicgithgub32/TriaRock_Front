import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home/Home';
import Register_Login from './pages/Register_Login/Register_Login';
import Cycling from './pages/Cycling/Cycling';
import Running from './pages/Running/Running';
import Swimming from './pages/Swimming/Swimming';
import Favorites from './pages/Favorites/Favorites';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register_login" element={<Register_Login />}></Route>
        <Route path="/cycling" element={<Cycling />}></Route>
        <Route path="/running" element={<Running />}></Route>
        <Route path="/swimming" element={<Swimming />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </>
  );
};

export default App;
