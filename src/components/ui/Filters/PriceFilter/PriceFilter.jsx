import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../../App';

const PriceFilter = () => {
    const { productsToRender, setProductsToRender } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([])
    
    const getLowerPrice = () => {
      const prices = productsToRender.map((product) => Number((product.price).slice(0,-2).replace(',','.')));
      const ascendingPrices = prices.sort((a, b) => a - b)
      const lowerPrice = ascendingPrices[0];
      return lowerPrice
    }
    const lowerPrice = getLowerPrice()
    const roundedLowerPrice = lowerPrice && Math.floor(lowerPrice)

    const getHighestPrice = () => {
        const prices = productsToRender.map((product) => Number((product.price).slice(0,-2).replace(',','.')));
        const descendingPrices = prices.sort((a, b) => b - a)
        const highestPrice = descendingPrices[0];
        return highestPrice
      }
      const highestPrice =  getHighestPrice()
      const roundedHighestPrice = highestPrice && Math.ceil(highestPrice)
      
      
      const [priceInput, setPriceInput] = useState(0)
      const roundedPriceInput = priceInput && Math.ceil(priceInput)
  
      

      const handlePriceChange = (event) => {
          const newMaxPrice = parseInt(event.target.value);
          setPriceInput(newMaxPrice);
          setFilteredProducts(productsToRender.filter((product) =>
          //teníamos prodcut.price sin pasar a number ni quitar €
          { const productPrice = Number((product.price).slice(0,-2).replace(',','.'))
            return productPrice <= newMaxPrice
          }
          ))
        };
      
        useEffect(() => {
          if (roundedHighestPrice) {
            setPriceInput(roundedHighestPrice);
          }
        }, [roundedHighestPrice]);

     //metiendo en dependencias priceInput no se pinta bien???
        useEffect(() => {
          setProductsToRender(filteredProducts)
        },[priceInput])
        
      
  return (
    <div className="price-filter">
       <label className="filter-label">
        precio
      </label>
    <input type="range" id="price-range" min={lowerPrice} max={highestPrice} value={priceInput}
     onChange={handlePriceChange}/>
     <div className="price-numbers">
      <p>{`${roundedLowerPrice} €`}</p>
     <p>{`${roundedHighestPrice} €`}</p>
     <p>{`${roundedPriceInput} €`}</p>
     </div>
    </div>
  )
}

export default PriceFilter