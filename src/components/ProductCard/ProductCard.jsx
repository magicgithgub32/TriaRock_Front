import React, { createContext, useContext, useEffect, useState } from 'react';
import './ProductCard.css';
import { FavoriteProductsContext, ProductContext, ProductSelectedContext } from '../../App';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import { Link } from 'react-router-dom';
import Favorites from '../../pages/Favorites/Favorites';

const ProductCard = () => {
  const productContext = useContext(ProductContext);
  const { productsToRender, setProductsToRender } = productContext;

  const productSelectedContext = useContext(ProductSelectedContext);
  const { setProductSelected } = productSelectedContext;

  const favoriteProductsContext = useContext(FavoriteProductsContext);
  const { favoriteProducts, setFavoriteProducts } = favoriteProductsContext;

  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    if (!favoriteProducts.includes(product)) {
      setFavoriteProducts((prevFavoriteProducts) => [...prevFavoriteProducts, product]);
    } else {
      setFavoriteProducts((prevFavoriteProducts) =>
        prevFavoriteProducts.filter((favProduct) => favProduct !== product)
      );
    }
  };

  useEffect(() => {
    console.log('favoriteProducts', favoriteProducts);
  }, [favoriteProducts]);

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
                <div className="hearts-container">
                  <img
                    src="../../src/assets/heart.svg"
                    className="heart"
                    alt="heart"
                    onClick={() => handleHeart(product)}
                  />
                  <img
                    src="../../src/assets/corazon.png"
                    className="red-heart"
                    alt="heart"
                    onClick={() => handleHeart(product)}
                  />
                </div>
              </div>
            ) : (
              <div className="product-container">
                <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                  <p>{product.price}</p>
                </div>
                <div className="hearts-container">
                  <img
                    src="../../src/assets/heart.svg"
                    className="heart"
                    alt="heart"
                    onClick={() => handleHeart(product)}
                  />
                  <img
                    src="../../src/assets/corazon.png"
                    className="red-heart"
                    alt="heart"
                    onClick={() => handleHeart(product)}
                  />
                </div>
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
