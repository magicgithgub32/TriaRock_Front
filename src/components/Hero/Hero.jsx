import BestSeller from '../BestSeller/BestSeller';
import CategoryCard from '../CategoryCard/CategoryCard';
import ProductCard from '../ProductCard/ProductCard';
import './Hero.css';
import React from 'react';

const Hero = () => {
  return (
    <>
      <CategoryCard />
      <BestSeller />
    </>
  );
};

export default Hero;
