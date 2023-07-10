import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../../App';

const PriceFilter = ({
  selectedPrice,
  setSelectedPrice,
  roundedHighestPrice,
  roundedLowestPrice
}) => {
  const handlePriceChange = (event) => {
    const newselectedPrice = parseInt(event.target.value);
    setSelectedPrice(newselectedPrice);
  };

  //   if (newselectedPrice <= selectedPrice) {
  //     setFilteredProducts(
  //       productsToRender?.filter((product) => {
  //         const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
  //         const cheaperProducts = productPrice <= newselectedPrice;
  //         return cheaperProducts;
  //       })
  //     );

  //     setExcludedProducts(
  //       productsToRender?.filter((product) => {
  //         const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
  //         const cheaperProducts = productPrice >= newselectedPrice;
  //         return cheaperProducts;
  //       })
  //     );
  //   } else {
  //     setFilteredProducts([...filteredProducts, ...excludedProducts]);
  //   }
  // };

  // useEffect(() => {
  //   setProductsToRender(filteredProducts);
  // }, [selectedPrice]);

  return (
    <div className="filter-label-and-options">
      <label className="filter-label">precio</label>
      <input
        type="range"
        id="price-range"
        min={roundedLowestPrice}
        max={roundedHighestPrice}
        value={selectedPrice}
        onChange={handlePriceChange}
      />
      <div className="price-numbers">
        <p>{`${roundedLowestPrice} €`}</p>
        <p>{`${selectedPrice} €`}</p>
        <p>{`${roundedHighestPrice} €`}</p>
      </div>
    </div>
  );
};

export default PriceFilter;
