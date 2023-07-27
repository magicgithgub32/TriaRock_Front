import React, { useContext } from 'react';
import './Header.css';

import Logo from '../ui/Logo/Logo';
import IconButton from '../ui/IconButton/IconButton';
import SearchInput from '../ui/SearchInput/SearchInput';
import NavBar from '../ui/NavBar/NavBar';

import { useLocation, useNavigate } from 'react-router-dom';
import { ProductContext, UserContext } from '../../App';
import { getCurrentPath } from '../../utils/currentPath';

const Header = () => {
  const { setUserFavs } = useContext(ProductContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const { currentPath } = getCurrentPath(useLocation);

  const handleLogout = () => {
    localStorage.removeItem('userStored');
    setIsLoggedIn(false);
    setUserFavs([]);
    navigate('/');
  };

  return (
    <header className="header-section">
      <div className="first-header-section">
        <Logo />

        {currentPath === '/product-detail' ? null : currentPath === '/login' ||
          currentPath === '/register' ? null : (
          <SearchInput id="search-input-desktop" />
        )}

        <div className="icons-section">
          <IconButton buttonLink="/" buttonText="HOME" srcImage="./src/assets/home-2.svg" />

          <IconButton
            buttonLink={isLoggedIn ? '/' : '/login'}
            buttonText={isLoggedIn ? 'LOG OUT' : 'REGISTER/LOG IN'}
            srcImage="./src/assets/user-circle.svg"
            buttonEvent={isLoggedIn && handleLogout}
          />

          <IconButton
            buttonLink="/favorites"
            buttonText="MY FAVS"
            srcImage="./src/assets/yellow-heart.svg"
          />
        </div>
      </div>
      {currentPath === '/product-detail' ? null : currentPath === '/login' ||
        currentPath === '/register' ? null : (
        <SearchInput id="search-input-mobile" />
      )}
      {currentPath === '/login' || currentPath === '/register' ? null : <NavBar />}
    </header>
  );
};

export default Header;
