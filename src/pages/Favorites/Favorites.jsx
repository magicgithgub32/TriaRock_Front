import React, { useContext, useEffect, useState } from 'react';
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
  const { isLoggedIn } = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const userStored = JSON.parse(localStorage.getItem('userStored'));
  
    if (!isLoggedIn) {
      setUserFavs([]);
    } else {
      favsGetFetch(setUserFavs);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setLoaded(false);
    setProductsToRender(userFavs);
    setLoaded(true);
  }, [userFavs]);

  return (
    <div>
      <Header />
      <main>
      <Title textTitle="My favorite products"/>
      {loaded ? (
        userFavs?.length > 0 ? (
          <ProductCard />
        ) : isLoggedIn ? (
          <Message messageText="You have no favorite products at the moment." />
        ) : (
          <Message messageText="Please log in or create your account and save your favorites." />
        )
      ) : (
        <p>Loading...</p>
      )}
      <CategoryCard />
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
