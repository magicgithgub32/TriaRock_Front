import React from 'react';
import './PriceFilter.css';

const PriceFilter = ({
  selectedPrice,
  setSelectedPrice,
  roundedHighestPrice,
  roundedLowestPrice,
  id
}) => {
  const handlePriceChange = (event) => {
    const newselectedPrice = parseInt(event.target.value);
    setSelectedPrice(newselectedPrice);
  };

  return (
    <div className="filter-label-and-options">
      <label className="filter-label" id={id}>
        precio
      </label>
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
        <p className="selected-price">{`${selectedPrice} €`}</p>
        <p>{`${roundedHighestPrice} €`}</p>
      </div>
    </div>
  );
};

export default PriceFilter;
