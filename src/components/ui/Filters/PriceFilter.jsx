import React, { useState, useContext } from 'react';
import { ProductContext } from '../../../App';

const PriceFilter = () => {
    const { productsToRender } = useContext(ProductContext);

    const getMaxPrice = () => {
        const prices = productsToRender.map((product) => Number((product.price).slice(0,-2).replace(',','.')));
        const descendingPrices = prices.sort((a, b) => b - a)
        const maxPrice = descendingPrices[0];
        return maxPrice
      }
      
      const [price, setPrice] = useState(0);
      const handlePriceChange = (event) => {
          const newPrice = parseInt(event.target.value);
          setPrice(newPrice);
        };
      
      
  return (
    <div>
    <input type="range" id="price-range" min="0" max={getMaxPrice()} value={price}
     onChange={handlePriceChange}/>
    </div>
  )
}

export default PriceFilter