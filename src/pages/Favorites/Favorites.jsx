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
// import { userStored } from '../../utils/localStorage';

const Favorites = () => {
  const { userFavs, setUserFavs, setProductsToRender } = useContext(ProductContext);
  const { isLoggedIn } = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const userStored = JSON.parse(localStorage.getItem('userStored'));
    console.log('isLoggedIn', isLoggedIn);
    console.log('userStored', userStored);

    if (!isLoggedIn) {
      setUserFavs([]);
    } else {
      console.log('userStored', userStored);

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
      <Title textTitle="My favorite products"></Title>
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
      <Footer />
    </div>
  );
};

export default Favorites;
