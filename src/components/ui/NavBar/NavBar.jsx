import React from 'react';
import './NavBar.css';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="category-navbar">
      <NavLink className="category-link" to="/swimming">
        SWIMMING
      </NavLink>
      <NavLink className="category-link" to="/cycling">
        CYCLING
      </NavLink>
      <NavLink className="category-link" to="/running">
        RUNNING
      </NavLink>
    </nav>
  );
};

export default NavBar;
