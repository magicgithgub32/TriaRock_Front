import React, { useContext } from 'react';
import './Favorites.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FavoriteProductsContext } from '../../App';
import ProductCard from '../../components/ProductCard/ProductCard';

const Favorites = () => {
  const { favoriteProducts } = useContext(FavoriteProductsContext);
  console.log(favoriteProducts);
  return (
    <section className="favorite-products-section">
      <Header />
      <article className="favorite-products-article">
        {favoriteProducts.length > 0 &&
          favoriteProducts.map((favoriteProduct) => (
            <img src={favoriteProduct.image} alt={favoriteProduct.name} key={favoriteProduct.id} />
          ))}
      </article>
      <Footer />
    </section>
  );
};

export default Favorites;
