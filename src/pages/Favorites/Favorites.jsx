import React, { useContext, useEffect } from 'react';
import './Favorites.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FavoriteProductsContext, UserContext } from '../../App';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Favorites = () => {
  const { favoriteProducts, setFavoriteProducts } = useContext(FavoriteProductsContext);
  console.log('favoriteProducts en pág favs', favoriteProducts);
  const userContext = useContext(UserContext);
  const { userLogged } = userContext;

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

  return (
    <section className="favorite-products-page">
      <Header />
      <article className="favorite-products-article">
        <h3 className="favorite-title">MY FAVORITE PRODUCTS</h3>
        <div className="favorite-products-wrapper">
          {favoriteProducts.length > 0 ? (
            favoriteProducts?.map((favoriteProduct) => (
              <figure className="favorite-products-section" key={favoriteProduct?._id}>
                <img
                  className="favorite-product-Img"
                  src={favoriteProduct.image}
                  alt={favoriteProduct.name}
                />
                {favoriteProduct.promo ? (
                  <div className="promo-container">
                    <div
                      className={`fav-product-price ${
                        favoriteProduct.promo ? 'fav-promo-price' : ''
                      }`}
                    >
                      <p>{favoriteProduct.price}</p>
                    </div>
                    <span className="promo-label">SALE</span>
                  </div>
                ) : (
                  <div className="product-container">
                    <div
                      className={`fav-product-price ${
                        favoriteProduct.promo ? 'fav-promo-price' : ''
                      }`}
                    >
                      <p>{favoriteProduct.price}</p>
                    </div>
                  </div>
                )}
                <div className="fav-product-description">
                  <p>{favoriteProduct.name}</p>
                </div>
              </figure>
            ))
          ) : (
            <div className="no-favorite-products">
              <h3>NO FAVORITE PRODUCTS AT THE MOMENT</h3>
            </div>
          )}
        </div>
      </article>

      <CategoryCard />
      <Footer />
    </section>
  );
};

export default Favorites;
