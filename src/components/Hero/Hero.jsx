import { UserContext } from '../../App';
import {useContext} from 'react'
import BestSeller from '../BestSeller/BestSeller';
import CategoryCard from '../CategoryCard/CategoryCard';
import ProductCard from '../ProductCard/ProductCard';
import './Hero.css';
import React from 'react';

const Hero = () => {
  const {userLogged} = useContext(UserContext)
  console.log(userLogged)
  return (
    <>
      <CategoryCard />
      <BestSeller />
    </>
  );
};

export default Hero;
