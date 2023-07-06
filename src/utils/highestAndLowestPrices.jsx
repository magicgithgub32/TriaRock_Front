import React from 'react';
import { categoryFetch } from '../services/categoryFetch';


export const highestAndLowestPrices = () => {

const getLowestPrice = () => {

  const categoriesData = categoryFetch()
  console.log('categories en prices', categoriesData)

    if (categoriesData) {
      const currentCategory = categoriesData?.filter(
        (category) => category.name === currentPath.slice(1, currentPath.length)
      );

      const prices = currentCategory[0].items.map((product) =>
        Number(product.price.slice(0, -2).replace(',', '.'))
      );
      const ascendingPrices = prices?.sort((a, b) => a - b);
      const lowestPrice = ascendingPrices[0];
      return lowestPrice;
    }
  };

  const lowestPrice = getLowestPrice();
  const roundedLowestPrice = lowestPrice && Math.floor(lowestPrice);

  const getHighestPrice = () => {
    if (categoriesData) {
      const currentCategory = categoriesData?.filter(
        (category) => category.name === currentPath.slice(1, currentPath.length)
      );

      const prices = currentCategory[0].items.map((product) =>
        Number(product.price.slice(0, -2).replace(',', '.'))
      );
      const descendingPrices = prices.sort((a, b) => b - a);
      const highestPrice = descendingPrices[0];
      return highestPrice;
    }
  };
  
  const highestPrice = getHighestPrice();
  const roundedHighestPrice = highestPrice && Math.ceil(highestPrice);

  return { roundedHighestPrice, roundedLowestPrice}
}