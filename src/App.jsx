import { Route, Routes } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import Home from './pages/Home/Home';
import CategoryPage from './pages/CategoryPage/CategoryPage';

import Login from './pages/RegisterLogin/Login';
import Favorites from './pages/Favorites/Favorites';
import { productFetch } from '../src/services/productFetch';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/RegisterLogin/Register';

export const ProductContext = createContext();
export const ProductSelectedContext = createContext();
export const FavoriteProductsContext = createContext();
export const UserContext = createContext();

const App = () => {
  const allProducts = productFetch();
  const [productsToRender, setProductsToRender] = useState([]);
  const [productSelected, setProductSelected] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [emailUserLoggedIn, setEmailUserLoggedIn] = useState(); //que sea el correo

  return (
    <>
      <ProductContext.Provider
        value={{
          allProducts: allProducts,
          productsToRender: productsToRender,
          setProductsToRender: setProductsToRender
        }}
      >
        <ProductSelectedContext.Provider
          value={{
            productSelected: productSelected,
            setProductSelected: setProductSelected
          }}
        >
          <FavoriteProductsContext.Provider
            value={{
              favoriteProducts: favoriteProducts,
              setFavoriteProducts: setFavoriteProducts
            }}
          >
             <UserContext.Provider
            value={{
              user: user,
              setUser: setUser,
              emailUserLoggedIn: emailUserLoggedIn
            }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/swimming" element={<CategoryPage />}></Route>
              <Route path="/cycling" element={<CategoryPage />}></Route>
              <Route path="/running" element={<CategoryPage />}></Route>

              <Route path="/favorites" element={<Favorites />}></Route>
              <Route path="/productDetail" element={<ProductDetail />}></Route>
            </Routes>
            </UserContext.Provider>
          </FavoriteProductsContext.Provider>
        </ProductSelectedContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
