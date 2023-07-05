import { Route, Routes } from 'react-router-dom';
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

const App = () => {
  const allProducts = productFetch();
  const categoriesData = categoryFetch();
  
  const [productsToRender, setProductsToRender] = useState([]);
  const [productSelected, setProductSelected] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [userRegistered, setUserRegistered] = useState({
    email: '',
    password: ''
  });
  const [userLogged, setUserLogged] = useState({
    email: '',
    password: ''
  });

  const [token, setToken] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setFavoriteProducts(data.favs);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [userLogged]);

  return (
    <>
      <ProductContext.Provider
        value={{
          allProducts: allProducts,
          productsToRender: productsToRender,
          setProductsToRender: setProductsToRender,
          filteredProducts: filteredProducts,
          setFilteredProducts: setFilteredProducts,
          productSelected: productSelected,
          setProductSelected: setProductSelected,
          favoriteProducts: favoriteProducts,
          setFavoriteProducts: setFavoriteProducts
        }}
      >
                  
            <UserContext.Provider
              value={{
                userRegistered: userRegistered,
                setUserRegistered: setUserRegistered,
                userLogged: userLogged,
                setUserLogged: setUserLogged,
                setToken: setToken,
                token: token
              }}
            >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                
               {categoriesData?.map((category) => (
               <Route path={`/${category.name}`} element={<CategoryPage />}></Route>
               ))
               }

                <Route path="/favorites" element={<Favorites />}></Route>
                <Route path="/productDetail" element={<ProductDetail />}></Route>

                {categoriesData?.map((category) => (
               <Route path={`/favorites/{category.name}`} element={<CategoryPage />}></Route>
               ))
               }

              </Routes>
            </UserContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
