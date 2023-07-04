import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.css';
import {
  FavoriteProductsContext,
  ProductContext,
  ProductSelectedContext,
  UserContext
} from '../../App';
import { Link } from 'react-router-dom';
// import { userFetch } from '../../services/userFetch';

const ProductCard = () => {
  const productContext = useContext(ProductContext);
  const { productsToRender, setProductsToRender } = productContext;

  const productSelectedContext = useContext(ProductSelectedContext);
  const { setProductSelected } = productSelectedContext;

  const favoriteProductsContext = useContext(FavoriteProductsContext);
  const { favoriteProducts, setFavoriteProducts } = favoriteProductsContext;

  const userContext = useContext(UserContext);
  const { userLogged, token } = userContext;

  const [favoriteSelected, setFavoriteSelected] = useState(false);

  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    setFavoriteSelected(!favoriteSelected);
    console.log('product id', product._id);

    const bodyData = { fav: product._id };

    console.log('user email', userLogged.email);

    // userLogged.email &&
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
  };

  // useEffect(() => {
  //   // setFavoriteProducts(userLogged.favs)
  //   console.log('favoriteProducts', userLogged.favs);
  // }, [favoriteSelected]);

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
                    src="../../src/assets/heart.svg"
                    className="heart-visible"
                    alt="heart"
                    onClick={() => handleHeart(product)}
                  />
                  <img
                    src="../../src/assets/corazon.png"
                    className="heart-invisible"
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
                    className="heart-visible"
                    alt="heart"
                    onClick={() => handleHeart(product)}
                  />
                  <img
                    src="../../src/assets/corazon.png"
                    className="heart-invisible"
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
