import React, { useContext } from 'react';
import './Hero.css';

import CategoryCard from '../CategoryCard/CategoryCard';
import BestSeller from '../BestSeller/BestSeller';
import ProductCard from '../ProductCard/ProductCard';
import Message from '../ui/Message/Message';

import { ProductContext, SearchContext } from '../../App';


const Hero = () => {
  const { searchClick } = useContext(SearchContext);
  const { productsToRender } = useContext(ProductContext);

  return (
    <main>
      {searchClick &&
        (productsToRender?.length === 0 ? (
          <Message messageText="No results found. Please, double check your spelling." />
        ) : (
          <ProductCard />
        ))}
      <CategoryCard />
      <BestSeller />
    </main>
  );
};

export default Hero;
