import { Route, Routes } from 'react-router-dom';
import React, {createContext, useState} from 'react';
import Home from './pages/Home/Home';
// import Cycling from './pages/Cycling/Cycling';
// import Running from './pages/Running/Running';
// import Swimming from './pages/Swimming/Swimming';
import CategoryPage from './pages/CategoryPage/CategoryPage';

import RegisterLogin from './pages/RegisterLogin/RegisterLogin';
import Favorites from './pages/Favorites/Favorites';
import { productFetch } from '../src/services/productFetch';

export const ProductContext = createContext();

const App = () => {
  const allProducts = productFetch();
  const [ productsToRender, setProductsToRender ] = useState([])
  
return (    
    <>
     <ProductContext.Provider
        value={{
          allProducts: allProducts,
          productsToRender: productsToRender
        }}
      >

      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/registerlogin" element={<RegisterLogin />}></Route>
        
        {/* <Route path="/swimming" element={<Swimming/>}></Route>
        <Route path="/cycling" element={<Cycling />}></Route>
        <Route path="/running" element={<Running />}></Route>
         */}
        <Route path="/swimming" element={<CategoryPage/>}></Route>
        <Route path="/cycling" element={<CategoryPage/>}></Route>
        <Route path="/running" element={<CategoryPage />}></Route>

        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
      </ProductContext.Provider>
    </>
  );
};

export default App;
