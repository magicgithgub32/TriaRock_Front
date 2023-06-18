import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import React from 'react';
import RegisterLogin from '../../pages/RegisterLogin/RegisterLogin';
import Favorites from '../../pages/Favorites/Favorites';
import Cycling from '../../pages/Cycling/Cycling';
import Running from '../../pages/Running/Running';
import Swimming from '../../pages/Swimming/Swimming';

const Header = () => {
  return (
    <header>
      <div className="first-header-section">
        <div className="logo-section">
          <img className="logo" src="./corriendo.png" alt="logo" />
          <p>TRIAROCK</p>
        </div>
        <div className="search-section">
          <input type="text" className="search-product-input" placeholder="Find your product" />
          <img src="./src/assets/searchIcon.png" className="searchIcon" />
        </div>
        <div className="my-account-section">
          <Link to={RegisterLogin}>
            <button className="my-TriaRock" type="button">
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
        <NavLink className="category-link" to="/cycling">
          CYCLING
        </NavLink>
        <NavLink className="category-link" to="running">
          RUNNING
        </NavLink>
        <NavLink className="category-link" to="swimming">
          SWIMMING
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
