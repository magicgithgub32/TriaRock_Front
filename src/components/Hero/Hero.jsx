import CategoryCard from '../CategoryCard/CategoryCard';
import ProductCard from '../ProductCard/ProductCard';
import './Hero.css';
import React from 'react';

const Hero = () => {
  return (
    <>
      <p className="hero">I am the Hero</p>
      <CategoryCard />
      <ProductCard />
    </>
  );
};

export default Hero;