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
  const { userLogged } = useContext(UserContext);

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    console.log(userLogged.email)
    if (userLogged.email === '') {
      setUserFavs([]);
    } else {
  favsGetFetch(userLogged, setUserFavs)
    }
  }, [userLogged]);
  
  useEffect(() => {
    setLoaded(false)
    setProductsToRender(userFavs)
    setLoaded(true)
    }, [userFavs]);
  
  return (
    <div>
      <Header />
        <Title textTitle="My favorite products"></Title>
        {loaded ?
         userFavs?.length > 0 ? (
            <ProductCard />
          ) : (
           userLogged.email === ''? 
           <Message messageText="Please login or create your account and save your favorites." />
           : <Message messageText="You have no favorite products at the moment." />
          ) : <p>Loading...</p>
        }
      <CategoryCard />
      <Footer />
    </div>
  );
};

export default Favorites;
