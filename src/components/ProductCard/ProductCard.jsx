import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import allProducts from '../../data/allProducts';
import { productFetch } from '../../services/productFetch';

const ProductCard = () => {
  // const [allProducts, setAllProducts] = useState();

  // const getProducts = async () => {
  //   const result = await fetch('http://localhost:3000/api/products/');

  //   const res = await result.json();

  //   getProducts();

  //   setAllProducts(res);

  // useEffect(() => {
  //   getProducts();
  //   setAllProducts(res);
  // }, []);

  const getProducts = productFetch();

  return (
    <div className="product-card-wrapper">
      {console.log(allProducts)}
      {allProducts?.map((product) => (
        <figure className="product-card" key={product.name}>
          <img className="product-Img" src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </figure>
      ))}
    </div>
  );
};

export default ProductCard;
