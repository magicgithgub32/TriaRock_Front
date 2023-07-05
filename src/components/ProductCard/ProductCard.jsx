import React, { useContext, useState, useEffect } from 'react';
import './ProductCard.css';

import {
  ProductContext,
  UserContext
} from '../../App';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  
  const { productsToRender, setProductSelected,favoriteProducts, setFavoriteProducts } = useContext(ProductContext);
  const { userLogged, token } = useContext(UserContext);


  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    const bodyData = { fav: product._id };

    if (!userLogged.email) {
      alert(
        'Please log in to your account or create a new one so you can see and save your favorite products'
      );
    } else {
      fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged.email}/fav`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bodyData)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          setFavoriteProducts(data.favs);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
  };


  return (
    <div className="product-card-wrapper">
      {productsToRender?.map((product) => (
      
        <figure className="product-card" key={product._id}>
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
                    src={
                      typeof favoriteProducts[0] === 'string'? 
                        favoriteProducts?.includes(product._id)?
                          '../../src/assets/red-heart.png' :
                          '../../src/assets/yellow-heart.svg'
                        :
                        favoriteProducts?.some((favProduct) => favProduct._id === product._id)?
                          '../../src/assets/red-heart.png' :
                          '../../src/assets/yellow-heart.svg'
                    }
                   className="heart"
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
                    
                      src={
                        typeof favoriteProducts[0] === 'string'? 
                          favoriteProducts?.includes(product._id)?
                            '../../src/assets/red-heart.png' :
                            '../../src/assets/yellow-heart.svg'
                          :
                          favoriteProducts?.some((favProduct) => favProduct._id === product._id)?
                            '../../src/assets/red-heart.png' :
                            '../../src/assets/yellow-heart.svg'
                      }

                   className="heart"
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
