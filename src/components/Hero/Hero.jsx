import React, { useContext } from 'react';
import './Hero.css';

import CategoryCard from '../CategoryCard/CategoryCard';
import BestSeller from '../BestSeller/BestSeller';
import ProductCard from '../ProductCard/ProductCard';
import { SearchContext } from '../../App';

const Hero = () => {

  const { searchClick } = useContext(SearchContext)


  return (
    <>
    { searchClick && (
      <section className="products-section">
          <ProductCard />
        </section>
        )}
      <CategoryCard />
      <BestSeller />
      </>
  
  );
};

export default Hero;
