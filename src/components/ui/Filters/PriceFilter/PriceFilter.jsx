import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../../App';

const PriceFilter = ({ setExcludedProducts, excludedProducts, priceInput, setPriceInput, roundedHighestPrice, roundedLowestPrice }) => {
  const {
    setProductsToRender,
    filteredProducts,
    setFilteredProducts,
    productsToRender
  } = useContext(ProductContext);


  const handlePriceChange = (event) => {
    console.log('evento', event.target.value)
    console.log('priceInput', priceInput)
    console.log('filteredProducts', filteredProducts)
    console.log('excludedProducts', excludedProducts)

    const newPriceInput = parseInt(event.target.value);
    setPriceInput(newPriceInput)
      
      if (newPriceInput <= priceInput) {
        setFilteredProducts(
          productsToRender?.filter((product) => {
            const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
            const cheaperProducts = productPrice <= newPriceInput;
            return cheaperProducts;
          })
        );
  
        setExcludedProducts(
          productsToRender?.filter((product) => {
            const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
            const cheaperProducts = productPrice >= newPriceInput;
            return cheaperProducts;
          })
        );
      } else {
        setFilteredProducts([...filteredProducts, ...excludedProducts]);
      }
  };

  
  useEffect(() => {
  setProductsToRender(filteredProducts);
  }, [priceInput]);

  return (
    <div className="filter-label-and-options">
      <label className="filter-label">precio</label>
      <input
        type="range"
        id="price-range"
        min={roundedLowestPrice}
        max={roundedHighestPrice}
        value={priceInput}
        onChange={handlePriceChange}
      />
      <div className="price-numbers">
        <p>{`${roundedLowestPrice} €`}</p>
        <p>{`${priceInput} €`}</p>
        <p>{`${roundedHighestPrice} €`}</p>
      </div>
    </div>
  );
};

export default PriceFilter;
