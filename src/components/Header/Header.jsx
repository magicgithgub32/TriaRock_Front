import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import React, { useContext } from 'react';
import Logo from '../ui/Logo/Logo';
import IconButton from '../ui/IconButton/IconButton';
import SearchInput from '../ui/SearchInput/SearchInput';
import { ProductContext, UserContext } from '../../App';
import NavBar from '../ui/NavBar/NavBar';

const Header = () => {
  const { setUserFavs } = useContext(ProductContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('userStored');
    setIsLoggedIn(false)
    setUserFavs([]);
    navigate('/');
  };

  return (
    <header className="header-section">
      <div className="first-header-section">
        <Logo />        

        {currentPath === '/product-detail' ? null : 
      (currentPath === '/login' || currentPath === '/register'? null :
      <SearchInput id="search-input-desktop" />)
      }

        <div className="icons-section">
          <IconButton buttonLink="/" buttonText="HOME" srcImage="./src/assets/home-2.svg" />

          <IconButton
            buttonLink={isLoggedIn ?  "/" : "/login" }
            buttonText={isLoggedIn ?  "LOG OUT" : "REGISTER/LOG IN"} //no lo hace en tiempo real
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
      {
      currentPath === '/product-detail' ? null : 
      (currentPath === '/login' || currentPath === '/register'? null :
      <SearchInput id="search-input-mobile" />)
    }
{currentPath === '/login' || currentPath === '/register' ? null : <NavBar/>}

      {/* <nav className="category-navbar">
        <NavLink className="category-link" to="/swimming">
          SWIMMING
        </NavLink>
        <NavLink className="category-link" to="/cycling">
          CYCLING
        </NavLink>
        <NavLink className="category-link" to="/running">
          RUNNING
        </NavLink>
      </nav> */}
    </header>
  );
};

export default Header;
