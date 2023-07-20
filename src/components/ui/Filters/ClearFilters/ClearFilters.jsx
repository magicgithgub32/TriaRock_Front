import React from 'react';
import './ClearFilters.css';


const ClearFilters = ({
  setSelectedTypes,
  setSelectedGender, 
  setSelectedPrice,
  roundedHighestPrice,
  productTypeRefs,
  genderRefs
}) => {
  

  const handleClearFilters = () => {
    setSelectedPrice(roundedHighestPrice);
    setSelectedTypes(''),
    setSelectedGender('')
    // productTypeRefs.current.forEach((productType) => productType.checked = false)
    // genderRefs.current.forEach((gender) => gender.checked = false)
  };


  return (
    <div>
      <button onClick={handleClearFilters}>Clear</button>
    </div>
  );
};

export default ClearFilters;
