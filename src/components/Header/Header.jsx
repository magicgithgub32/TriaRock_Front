import { NavLink } from 'react-router-dom';
import './Header.css';
import React from 'react';
import Logo from '../ui/Logo/Logo';
import IconButton from '../ui/IconButton/IconButton';

const Header = () => {
  return (
    <header className="header-section">
      <div className="first-header-section">
        <Logo />
        <div className="search-section">
          <input type="text" className="search-product-input" placeholder="Find your product" />
          <img src="./src/assets/search.svg" className="search-icon" />
        </div>
        <div className="icons-section">
          <IconButton buttonLink="/" buttonText="HOME" srcImage="./src/assets/home-2.svg" />
          <IconButton
            buttonLink="/login"
            buttonText="MY TRIAROCK"
            srcImage="./src/assets/user-circle.svg"
          />
          <IconButton
            buttonLink="/favorites"
            buttonText="MY FAVS"
            srcImage="./src/assets/yellow-heart.svg"
          />
     
        </div>
      </div>

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
    </header>
  );
};

export default Header;
