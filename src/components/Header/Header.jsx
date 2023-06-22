import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import React from 'react';
import RegisterLogin from '../../pages/RegisterLogin/RegisterLogin';
import Favorites from '../../pages/Favorites/Favorites';
import Home from '../../pages/Home/Home';
import BackHome from '../ui/BackHome/BackHome';
import Logo from '../ui/BackHome/Logo';

const Header = () => {
  return (
    <header className="header-section">
      <div className="first-header-section">
        <Logo />
        <div className="search-section">
          <input type="text" className="search-product-input" placeholder="Find your product" />
          <img src="./src/assets/search.svg" className="search-icon" />
        </div>
        <BackHome />
        <div className="my-account-section">
          <Link to={RegisterLogin}>
            <button className="my-triarock" type="button">
              MY TRIAROCK
            </button>
          </Link>
        </div>
        <div className="my-favs-section">
          <Link to={Favorites}>
            <button className="my-favs" type="button">
              MY FAVS
            </button>
          </Link>
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
