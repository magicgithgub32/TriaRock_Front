import React, { useContext } from 'react';
import './ProductCard.css';

import { ProductContext } from '../../App';
import { Link } from 'react-router-dom';
import { userStored } from '../../utils/localStorage';
import { favPutFetch } from '../../services/favPutFetch';

const ProductCard = () => {
  const { productsToRender, setProductSelected, userFavs, setUserFavs } =
    useContext(ProductContext);

  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    const bodyData = { fav: product._id };

    if (!userStored) {
      alert(
        'Please log in to your account or create a new one so you can see and save your favorite products'
      );
    } else {
      favPutFetch(userStored, bodyData, setUserFavs, userFavs);
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

            <div className="promo-container">
              <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                <p>{product.price}</p>
              </div>

              {product.promo ? <span className="promo-label">SALE</span> : <span></span>}

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
