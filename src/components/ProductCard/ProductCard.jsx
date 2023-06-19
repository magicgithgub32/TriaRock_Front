import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { productFetch } from '../../services/productFetch';

const ProductCard = () => {
  const allProducts = productFetch();
  const [ filteredProducts, setFilteredProducts ] = useState()

  const getFilteredProducts = (category) => {
    allProducts.filter((product) => product.category === category)
}

  return (
    <div className="product-card-wrapper">
      {console.log(allProducts)}
      {allProducts?.map((product) => (
        <figure className="product-card" key={product.name}>
          <div className="product-img-price-wrapper">
            <div className="product-img-wrapper">
              <img className="product-Img" src={product.image} alt={product.name} />
            </div>
            {product.promo ? (
              <div className="promo-container">
                <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                  <p>{product.price}</p>
                </div>
                <span className="promo-label">SALE</span>
              </div>
            ) : (
              <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                <p>{product.price}</p>
              </div>
            )}
          </div>

          <div className="product-description">
            <p>{product.name}</p>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default ProductCard;
