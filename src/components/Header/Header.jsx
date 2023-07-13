import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import React, { useContext } from 'react';
import Logo from '../ui/Logo/Logo';
import IconButton from '../ui/IconButton/IconButton';
import SearchInput from '../ui/SearchInput/SearchInput';
import { ProductContext, UserContext } from '../../App';

const Header = () => {
  const { setUserFavs } = useContext(ProductContext);
  const { userLogged, setUserLogged, isUserLogged, setIsUserLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userStored');
    setUserLogged({ email: '', password: '' });
    setIsUserLogged(false)
    setUserFavs([])
    navigate('/');
  };


  return (
    <header className="header-section">
      <div className="first-header-section">
        <Logo />
        <SearchInput />
        <div className="icons-section">
          <IconButton buttonLink="/" buttonText="HOME" srcImage="./src/assets/home-2.svg" />
          {isUserLogged ? (
            <IconButton
              buttonLink="/"
              buttonText="LOGOUT"
              srcImage="./src/assets/user-circle.svg"
              buttonEvent={handleLogout}
            />
          ) : (
            <IconButton
              buttonLink="/login"
              buttonText="REGISTER/LOGIN"
              srcImage="./src/assets/user-circle.svg"
            />
          )}
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
