import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import './BestSeller.css';
import ProductCard from '../ProductCard/ProductCard';

const BestSeller = () => {
  const { allProducts } = useContext(ProductContext);
  const bestSellerProducts = allProducts?.filter((product) => product.bestSeller === true);
  console.log(bestSellerProducts);
  return (
    <div className="best-seller-wrapper">
      <p className="best-seller-text"> BEST SELLER PRODUCTS</p>
      <ProductCard product={bestSellerProducts} />
    </div>
  );
};

export default BestSeller;
