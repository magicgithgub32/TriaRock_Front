import React, { useContext } from 'react';
import './ProductCard.css';

import { ProductContext } from '../../App';
import { Link } from 'react-router-dom';
import { userStored } from '../../utils/localStorage'

const ProductCard = () => {
 
    const { productsToRender, setProductSelected, userFavs, setUserFavs } =
    useContext(ProductContext);


  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    const bodyData = { fav: product._id };
   
    if (!userStored.email) {
      alert(
        'Please log in to your account or create a new one so you can see and save your favorite products'
      );
    } else {
      fetch(`${import.meta.env.VITE_API_URL}/users/${userStored.email}/fav`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userStored.token}`
        },
        body: JSON.stringify(bodyData)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          setUserFavs(data.favs);
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
                         typeof userFavs[0] === 'string'
                        ? userFavs?.includes(product._id)
                          ? '../../src/assets/red-heart.png'
                          : '../../src/assets/yellow-heart.svg'
                        : userFavs?.some((favProduct) => favProduct._id === product._id)
                        ? '../../src/assets/red-heart.png'
                        : '../../src/assets/yellow-heart.svg'
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
                        typeof userFavs[0] === 'string'
                        ? userFavs?.includes(product._id)
                          ? '../../src/assets/red-heart.png'
                          : '../../src/assets/yellow-heart.svg'
                        : userFavs?.some((favProduct) => favProduct._id === product._id)
                        ? '../../src/assets/red-heart.png'
                        : '../../src/assets/yellow-heart.svg'
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
