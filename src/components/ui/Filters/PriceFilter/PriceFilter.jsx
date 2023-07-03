import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../../App';

const PriceFilter = ({ categoriesData, currentPath }) => {
  const { productsToRender, setProductsToRender } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getLowestPrice = () => {
    if (categoriesData) {
      console.log('categoriesData', categoriesData);
      const currentCategory = categoriesData?.filter(
        (category) => category.name === currentPath.slice(1, currentPath.length)
      );

      console.log('currentCateg.', currentCategory);

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
      console.log('categoriesData', categoriesData);
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

  const [priceInput, setPriceInput] = useState(200);
  const roundedPriceInput = priceInput && Math.ceil(priceInput);

  const handlePriceChange = (event) => {
    console.log('event:', event);

    setPriceInput(event.target.value);
  };

  useEffect(() => {
    if (categoriesData) {
      const currentCategory = categoriesData?.filter(
        (category) => category.name === currentPath.slice(1, currentPath.length)
      );
      const newMaxPrice = parseInt(priceInput);

      const filteredProducts = currentCategory[0].items.filter((item) => {
        const productPrice = Number(item.price.slice(0, -2).replace(',', '.'));
        return productPrice <= newMaxPrice;
      });

      console.log('filteredProducts', filteredProducts);

      setProductsToRender(filteredProducts);
    }
  }, [priceInput]);

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
