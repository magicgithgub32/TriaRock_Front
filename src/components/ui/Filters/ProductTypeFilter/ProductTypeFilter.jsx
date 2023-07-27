import React from 'react';
import './ProductTypeFilter.css';

const ProductTypeFilter = ({
  inputOptions,
  selectedTypes,
  setSelectedTypes,
  id
}) => {
  const handleCheckbox = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;

    setSelectedTypes((prevSelectedTypes) => {
      if (isChecked) {
      
        if (!prevSelectedTypes.includes(value)) {
          return [...prevSelectedTypes, value];
        }
      } else {
        return prevSelectedTypes.filter((selectedOption) => selectedOption !== value);
      }

      return prevSelectedTypes; 
    });
  };

  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label" id={id}>
        tipo de producto
      </label>
      {inputOptions?.map((option, index) => (
        <div className="filter-options" key={index}>
          <input
            type="checkbox"
            id={option}
            name="tipo de producto"
            value={option}
            onChange={handleCheckbox}
            checked={selectedTypes.includes(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default ProductTypeFilter;
