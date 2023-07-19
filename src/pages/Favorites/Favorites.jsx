import React, { useContext, useEffect } from 'react';
import './Favorites.css';
import { ProductContext, UserContext } from '../../App';

import Header from '../../components/Header/Header';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Message from '../../components/ui/Message/Message';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/ui/Title/Title';
import ProductCard from '../../components/ProductCard/ProductCard';
import { favsGetFetch } from '../../services/favsGetFetch';

const Favorites = () => {
  const { userFavs, setUserFavs, setProductsToRender } = useContext(ProductContext);
  const { userLogged } = useContext(UserContext);

  useEffect(() => {
    console.log(userLogged.email)
    if (userLogged.email === '') {
      setUserFavs([]);
    } else {
  favsGetFetch(userLogged, setUserFavs)
    }
  }, [userLogged]);
  
  useEffect(() => {
    setProductsToRender(userFavs)
    }, [userFavs]);
  
  return (
    <section className="favorite-products-page">
      <Header />
      <article className="favorite-products-article">
        <Title textTitle="My favorite products"></Title>
        <div className="favorite-products-wrapper">
          {userFavs?.length > 0 ? (
            <ProductCard />
          ) : (
           userLogged.email === ''? 
           <Message messageText="Please login or create your account and save your favorites" />
           : <Message messageText="You have no favorite products at the moment" />
          )}
        </div>
      </article>

      <CategoryCard />
      <Footer />
    </section>
  );
};

export default Favorites;
