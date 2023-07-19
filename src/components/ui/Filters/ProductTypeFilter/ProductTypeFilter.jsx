import React from 'react';
import './ProductTypeFilter.css';

const ProductTypeFilter = ({ inputOptions, setSelectedTypes, productTypeRefs }) => {
  
  const handleCheckbox = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    

    setSelectedTypes((prevSelectedTypes) => {
      if (isChecked) {
        // Add the value to the selected types if it's not already present
        if (!prevSelectedTypes.includes(value)) {
          return [...prevSelectedTypes, value];
        }
      } else {
        // Remove the value from the selected types
        return prevSelectedTypes.filter((selectedOption) => selectedOption !== value);
      }

      return prevSelectedTypes; // Return the previous state if no changes are made
    });
  };

  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label">
        tipo de producto
      </label>
      {inputOptions.map((option, index) => (
        <div className="filter-options" key={index}>
          <input
            type="checkbox"
            id={option}
            name="tipo de producto"
            value={option}
            onChange={handleCheckbox}
            ref={(el) => (productTypeRefs.current[index] = el)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default ProductTypeFilter;
