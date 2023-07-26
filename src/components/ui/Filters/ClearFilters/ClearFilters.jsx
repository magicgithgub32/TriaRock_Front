import React from 'react';
import './ClearFilters.css';


const ClearFilters = ({
  setSelectedTypes,
  setSelectedGender, 
  setSelectedPrice,
  roundedHighestPrice
}) => {
  

  const handleClearFilters = () => {
    setSelectedPrice(roundedHighestPrice);
    setSelectedTypes(''),
    setSelectedGender('')
  };


  return (
    <div className="button-container">
      <button className="white-button" onClick={handleClearFilters}>Clear</button>
    </div>
  );
};

export default ClearFilters;
