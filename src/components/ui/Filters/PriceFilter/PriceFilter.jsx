import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../../App';

const PriceFilter = ({ currentPath, setExcludedProducts, excludedProducts }) => {
  const {
    setProductsToRender,
    filteredProducts,
    setFilteredProducts,
    categoriesData,
    productsToRender
  } = useContext(ProductContext);

  const getLowestPrice = () => {
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

  // const [priceInput, setPriceInput] = useState(Math.ceil(highestPrice));
  const [priceInput, setPriceInput] = useState(roundedHighestPrice);

  const handlePriceChange = (event) => {
    setPriceInput(event.target.value);
    const newMaxPrice = parseInt(event.target.value);

    setFilteredProducts(
      productsToRender.filter((product) => {
        const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
        return productPrice <= newMaxPrice;
      })
    );

    setExcludedProducts(
      productsToRender.filter((product) => {
        const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
        return productPrice > newMaxPrice;
      })
    );
    setFilteredProducts([...filteredProducts, ...excludedProducts]);
  };

  useEffect(() => {
    setProductsToRender(filteredProducts);
  }, [priceInput]);

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
        <p>{`${priceInput} €`}</p>
        <p>{`${roundedHighestPrice} €`}</p>
      </div>
    </div>
  );
};

export default PriceFilter;
