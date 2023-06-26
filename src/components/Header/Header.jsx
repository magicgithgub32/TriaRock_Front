import { NavLink } from 'react-router-dom';
import './Header.css';
import React from 'react';
import BackHome from '../ui/BackHome/BackHome';
import Logo from '../ui/BackHome/Logo';
import Button from '../ui/Button/Button';
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
          {/* <BackHome /> */}
          <IconButton buttonLink="/" buttonText="HOME" srcImage="./src/assets/home-2.svg" />
          {/* <div className="my-account-section"> */}
          {/* <Button buttonLink="/registerlogin" buttonText="MY TRIAROCK"/> */}
          <IconButton
            buttonLink="/login"
            buttonText="MY TRIAROCK"
            srcImage="./src/assets/user-circle.svg"
          />
          {/* </div> */}
          {/* <div className="my-favs-section"> */}
          {/* <Button buttonLink="/favorites" buttonText="MY FAVS"/> */}
          <IconButton
            buttonLink="/favorites"
            buttonText="MY FAVS"
            srcImage="./src/assets/heart.svg"
          />
          {/* </div> */}
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
