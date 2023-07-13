import React, { useContext, useEffect } from 'react';
import './Favorites.css';
import { ProductContext, UserContext } from '../../App';

import Header from '../../components/Header/Header';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Message from '../../components/ui/Message/Message';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/ui/Title/Title';
import ProductCard from '../../components/ProductCard/ProductCard';


const Favorites = () => {
  const { userFavs, setUserFavs, setProductsToRender } = useContext(ProductContext);
  const { userLogged } = useContext(UserContext);

  useEffect(() => {
 
    if (userLogged.email === "") {
      setUserFavs([]);
    } else {
      fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged?.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          setProductsToRender(data.favs)
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
  }, [userFavs]);
//ponía el userlogged

  return (
    <section className="favorite-products-page">
      <Header />
      <article className="favorite-products-article">
        <Title textTitle="My favorite products"></Title>
        <div className="favorite-products-wrapper">
          {userFavs?.length > 0 ? (
          <ProductCard/>
          ) : (
            <Message messageText="You have no favorite products at the moment" />
          )}
        </div>
      </article>

      <CategoryCard />
      <Footer />
    </section>
  );
};

export default Favorites;
