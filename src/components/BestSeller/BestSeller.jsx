import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../App';
import './BestSeller.css';
import ProductCard from '../ProductCard/ProductCard';

const BestSeller = () => {
  const { allProducts, setProductsToRender } = useContext(ProductContext);
  
  useEffect(() => {
    const bestSellerProducts = allProducts?.filter((product) => product.bestSeller === true);
   setProductsToRender(bestSellerProducts)     
}, [allProducts]);

  return (
    <div className="best-seller-wrapper">
      <p className="best-seller-text"> BEST SELLER PRODUCTS</p>
      <ProductCard />
    </div>
  );
};

export default BestSeller;
