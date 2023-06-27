import React, { useContext, useEffect } from 'react';
import './ProductCard.css';
import { FavoriteProductsContext, ProductContext, ProductSelectedContext, UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { userFetch } from '../../services/userFetch'

const ProductCard = () => {
  const productContext = useContext(ProductContext);
  const { productsToRender, setProductsToRender } = productContext;

  const productSelectedContext = useContext(ProductSelectedContext);
  const { setProductSelected } = productSelectedContext;

  const favoriteProductsContext = useContext(FavoriteProductsContext);
  const { favoriteProducts, setFavoriteProducts } = favoriteProductsContext;

  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;

    const handleClick = (product) => {
    setProductSelected(product);
  };

  const handleHeart = (product) => {
    
    setFavoriteProducts(userDataFromDB.favs) //traerlo por props de pág. login

    // if (!favoriteProducts.includes(product)) {
      
    //   console.log('producto no repetido')
    //   setFavoriteProducts((prevFavoriteProducts) => [...prevFavoriteProducts, product]);
    // } else {
    //   console.log('producto repetido')
    //   setFavoriteProducts((prevFavoriteProducts) => {
    //   console.log('prev', prevFavoriteProducts)
    //     prevFavoriteProducts.filter((favProduct) => favProduct !== product)
    //   });
    // }

    fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}/fav`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // setProductsToRender(favoriteProducts); esta es otra opción para renderizar los favoritos en la
    //pág de favoritos
    console.log('favoriteProducts', favoriteProducts);
  }, [favoriteProducts]);

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
