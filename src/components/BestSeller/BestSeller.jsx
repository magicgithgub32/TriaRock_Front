import React, { useContext, useEffect } from 'react';
import './BestSeller.css';

import ProductCard from '../ProductCard/ProductCard';
import Title from '../ui/Title/Title';

import { ProductContext, SearchContext } from '../../App';


const BestSeller = () => {
  const { allProducts, setProductsToRender } = useContext(ProductContext);
  const { searchClick } = useContext(SearchContext);

  useEffect(() => {
    const bestSellerProducts = allProducts?.filter((product) => product.bestSeller === true);
    setProductsToRender(bestSellerProducts);
  }, [allProducts]);

  return (
    <>
      {!searchClick && (
        <div className="best-seller-wrapper">
          <Title textTitle="Best seller products" />
          <ProductCard />
        </div>
      )}
    </>
  );
};

export default BestSeller;
