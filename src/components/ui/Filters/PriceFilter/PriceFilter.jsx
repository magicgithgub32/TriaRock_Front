import React from 'react';

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
