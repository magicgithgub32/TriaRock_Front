import { Route, Routes } from 'react-router-dom';
import React, { useState, createContext } from 'react';

import Home from './pages/Home/Home';
import Login from './pages/RegisterLogin/Login';
import Register from './pages/RegisterLogin/Register';
import CategoryPage from './pages/CategoryPage/CategoryPage';

import Favorites from './pages/Favorites/Favorites';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import { productFetch } from '../src/services/productFetch';
import { categoryFetch } from '../src/services/categoryFetch';

import { userStored } from './utils/localStorage';
import { userFavsFetch } from './services/userFavsFetch';

export const ProductContext = createContext();
export const UserContext = createContext();
export const SearchContext = createContext();

const App = () => {
  const allProducts = productFetch();
  const categoriesData = categoryFetch();
  
  const [productsToRender, setProductsToRender] = useState([]);
  const [productSelected, setProductSelected] = useState([]);
  

  const [userRegistered, setUserRegistered] = useState({
    email: '',
    password: ''
  });

  const [userLogged, setUserLogged] = useState(() => {
    if (localStorage.getItem('userStored')) {
      return userStored;
    } else {
      return {
        email: '',
        password: ''
      };
    }
  });


  const { userFavs, setUserFavs } = userFavsFetch(userLogged)

  const [error, setError] = useState('');

  const [searchInput, setSearchInput] = useState('');
  const [searchClick, setSearchClick] = useState(false);

  return (
    <>
      <ProductContext.Provider
        value={{
          allProducts: allProducts,
          categoriesData: categoriesData,
          productsToRender: productsToRender,
          setProductsToRender: setProductsToRender,
          productSelected: productSelected,
          setProductSelected: setProductSelected,
          userFavs: userFavs,
          setUserFavs: setUserFavs
        }}
      >
        <UserContext.Provider
          value={{
            userRegistered: userRegistered,
            setUserRegistered: setUserRegistered,
            userLogged: userLogged,
            setUserLogged: setUserLogged,
            // isUserLogged: isUserLogged,
            // setIsUserLogged: setIsUserLogged,
            error: error,
            setError: setError
          }}
        >
          <SearchContext.Provider
            value={{
              searchInput: searchInput,
              setSearchInput: setSearchInput,
              searchClick: searchClick,
              setSearchClick: setSearchClick
            }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>


              {categoriesData?.map((category) => (
                <Route
                  key={category.name}
                  path={`/${category.name}`}
                  element={<CategoryPage />}
                ></Route>
              ))}

              <Route path="/favorites" element={<Favorites />}></Route>
              <Route path="/product-detail" element={<ProductDetail />}></Route>

              <Route path="/favorites/swimming" element={<CategoryPage />} />

              {/* {categoriesData?.map((category) => (
              <Route
                key={category.name}
                path={`/favorites/${category.name}`}
                element={<CategoryPage />}
              ></Route>
            ))} */}
            </Routes>
          </SearchContext.Provider>
        </UserContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
