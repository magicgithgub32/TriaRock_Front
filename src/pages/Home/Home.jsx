import React from 'react';
import './Home.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

const Home = ({ searchInput }) => {
  return (
    <div>
      <Header searchInput={searchInput} />
      <Hero searchInput={searchInput} />
      <Footer />
    </div>
  );
};

export default Home;
