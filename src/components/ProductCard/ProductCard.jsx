import React, { useContext, useState, useEffect } from 'react';
import './ProductCard.css';
import {
  FavoriteProductsContext,
  ProductContext,
  ProductSelectedContext,
  UserContext
} from '../../App';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const productContext = useContext(ProductContext);
  const { productsToRender, setProductsToRender } = productContext;

  const productSelectedContext = useContext(ProductSelectedContext);
  const { setProductSelected } = productSelectedContext;

  const favoriteProductsContext = useContext(FavoriteProductsContext);
  const { favoriteProducts, setFavoriteProducts } = favoriteProductsContext;

  const userContext = useContext(UserContext);
  const { userLogged, token } = userContext;

  const [ heartImage, setHeartImage ] = useState('../../src/assets/heart.svg')


  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    const bodyData = { fav: product._id };

    console.log('user email', userLogged.email);

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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setFavoriteProducts(data.favs);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [userLogged]);

  console.log('Productstorender', productsToRender);
  console.log('Favoriteproducts', favoriteProducts);


  useEffect(() => {
    productsToRender?.forEach((product) => {
      if (typeof favoriteProducts[0] === 'string') {
        if (favoriteProducts?.includes(product._id)) {
          setHeartImage('../../src/assets/corazon.png');
        } else {
          setHeartImage('../../src/assets/heart.svg');
        }
      } else {
        if (favoriteProducts?.some((favProduct) => favProduct._id === product._id)) {
          setHeartImage('../../src/assets/corazon.png');
        } else {
          setHeartImage('../../src/assets/heart.svg');
        }
      }
    });
  }, [favoriteProducts, productsToRender]);
 

  return (
    <div className="product-card-wrapper">
      {productsToRender?.map((product, index) => (
      
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
                    src={heartImage}
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
                    
                    src={heartImage}

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
