import React, { useContext, useState, useRef, useMemo, useEffect } from 'react';
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

  const [heartClasses, setHeartClasses] = useState([]);

  const yellowHearts = useRef([])
  const redHearts = useRef([])

  const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product, index) => {

    const bodyData = { fav: product._id };

    console.log('user email', userLogged.email);

    if(!userLogged.email) {   
    alert('Please create an account so you can save your favorite products')
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


        setHeartClasses((prevClasses) =>
        prevClasses.map((classes, i) =>
          i === index
            ? {
                yellowHeart: 'heart-invisible',
                redHeart: 'heart-visible'
              }
            : classes
        )
      );
        
        // if (yellowHearts.current[index].className != "heart-invisible") {
        //   yellowHearts.current[index].className="heart-invisible"}
        // if (redHearts.current[index].className!="heart-visible") {
        //   redHearts.current[index].className="heart-visible"}
  

      })
      .catch((error) => {
        console.log('Error', error);
      });
    
    }
  };

  // useEffect(() => {

  // },[heartClicked])

  useEffect(() => {
    // Inicializar el estado de las clases de los corazones
    const initialClasses = productsToRender?.map(() => ({
      yellowHeart: 'heart-visible',
      redHeart: 'heart-invisible'
    }));
    setHeartClasses(initialClasses);
  }, [productsToRender]);

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
                    src="../../src/assets/heart.svg"
                    className={heartClasses[index]?.yellowHeart}
                    alt="heart"
                    onClick={() => handleHeart(product, index)}
                    ref={(el) => (yellowHearts.current[index] = el)}
                  />
                  <img
                    src="../../src/assets/corazon.png"
                    className={heartClasses[index]?.redHeart}
                    alt="heart"
                    onClick={() => handleHeart(product, index)}
                    ref={(el) => (redHearts.current[index] = el)}
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
                    className={heartClasses[index]?.yellowHeart}
                    alt="heart"
                    onClick={() => handleHeart(product, index)}
                    ref={(el) => (yellowHearts.current[index] = el)}
                  />
                  <img
                    src="../../src/assets/corazon.png"
                    className={heartClasses[index]?.redHeart}
                    alt="heart"
                    onClick={() => handleHeart(product, index)}
                    ref={(el) => (redHearts.current[index] = el)}
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
