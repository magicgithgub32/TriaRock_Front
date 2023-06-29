import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../../App';

const PriceFilter = ({ categoriesData }) => {
  const { productsToRender, setProductsToRender } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getLowestPrice = () => {
      if (categoriesData) {
        const prices = categoriesData?.map((product) =>
          Number(product.price.slice(0, -2).replace(',', '.'))
        );
        const ascendingPrices = prices?.sort((a, b) => a - b);
        const lowestPrice = ascendingPrices[0];
        return lowestPrice;
      }
    };

    const lowestPrice = getLowestPrice();
    const roundedLowestPrice = lowestPrice && Math.floor(lowestPrice);
  }, []);

  const getHighestPrice = () => {
    const prices = productsToRender.map((product) =>
      Number(product.price.slice(0, -2).replace(',', '.'))
    );
    const descendingPrices = prices.sort((a, b) => b - a);
    const highestPrice = descendingPrices[0];
    return highestPrice;
  };
  const highestPrice = getHighestPrice();
  const roundedHighestPrice = highestPrice && Math.ceil(highestPrice);

  const [priceInput, setPriceInput] = useState(200);
  const roundedPriceInput = priceInput && Math.ceil(priceInput);

  const handlePriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setPriceInput(event.target.value);
    setFilteredProducts(
      productsToRender.filter((product) => {
        const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
        return productPrice <= newMaxPrice;
      })
    );
    console.log('filteredProducts', filteredProducts);
  };

  // useEffect(() => {
  //   const setPrice = async () => {
  //     await setPriceInput(roundedHighestPrice);
  //   };

  //   setPrice();
  // }, [roundedHighestPrice]);

  useEffect(() => {
    setProductsToRender(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="price-filter">
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
        <p>{`${roundedHighestPrice} €`}</p>
        <p>{`${roundedPriceInput} €`}</p>
      </div>
    </div>
  );
};

export default PriceFilter;
