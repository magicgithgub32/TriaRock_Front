import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';

import Home from './pages/Home/Home';
import Login from './pages/RegisterLogin/Login';
import Register from './pages/RegisterLogin/Register';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Favorites from './pages/Favorites/Favorites';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import { productFetch } from '../src/services/productFetch';
import { categoryFetch } from '../src/services/categoryFetch';

export const ProductContext = createContext();
export const UserContext = createContext();
export const SearchContext = createContext();

const App = () => {
  const allProducts = productFetch(useState, useEffect);
  const categoriesData = categoryFetch(useState, useEffect);

  const [productsToRender, setProductsToRender] = useState([]);
  const [productSelected, setProductSelected] = useState([]);

  const [userFavs, setUserFavs] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem('userStored')) {
      return true;
    } else {
      return false;
    }
  });

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
            setIsLoggedIn: setIsLoggedIn,
            isLoggedIn: isLoggedIn
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

              <Route path="/login" element={<Login error={error} setError={setError} />}></Route>
              <Route
                path="/register"
                element={<Register error={error} setError={setError} />}
              ></Route>

              {categoriesData?.map((category) => (
                <Route
                  key={category.name}
                  path={`/${category.name}`}
                  element={<CategoryPage />}
                ></Route>
              ))}

              {categoriesData?.map((category) => (
                <Route
                  key={category.name}
                  path={`/favorites/${category.name}`}
                  element={<Navigate to={`/${category.name}`} />}
                ></Route>
              ))}

              <Route path="/favorites" element={<Favorites />}></Route>
              <Route path="/product-detail" element={<ProductDetail />}></Route>
            </Routes>
          </SearchContext.Provider>
        </UserContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
