import React from 'react';
import './Hero.css';

import CategoryCard from '../CategoryCard/CategoryCard';
import BestSeller from '../BestSeller/BestSeller';

const Hero = () => {

  return (
    <>
      <CategoryCard />
      <BestSeller />
    </>
  );
};

export default Hero;
