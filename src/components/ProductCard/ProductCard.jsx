import React, { createContext, useContext, useEffect, useState } from 'react';
import './ProductCard.css';
import { ProductContext, ProductSelectedContext } from '../../App';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const productContext = useContext(ProductContext);
  const { productsToRender, setProductsToRender } = productContext;

  const productSelectedContext = useContext(ProductSelectedContext);
  const { setProductSelected } = productSelectedContext;

  const handleClick = (product) => {
    setProductSelected(product);

    console.log('Product Detail at ProductCard', product);
  };

  return (
    <div className="product-card-wrapper">
      {productsToRender?.map((product) => (
        <figure className="product-card" key={product.name}>
          <div className="product-img-price-wrapper">
            <div className="product-img-wrapper">
              <Link to="/ProductDetail">
                <img
                  className="product-Img"
                  src={product.image}
                  alt={product.name}
                  onClick={() => handleClick(product)}
                />
              </Link>
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
