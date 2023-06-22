import React, { useState, useEffect, useContext } from 'react';
import './GenderFilter.css';
import { ProductContext } from '../../../../App';

const GenderFilter = ({ inputTitle, inputOptions, currentPath, categoriesData }) => {
  const { setProductsToRender } = useContext(ProductContext);
  //inputOptions: hombre, mujer...

const handleCheckbox = (ev) => {
   
const selectedOption = ev.target.value;

if (categoriesData) {
    const currentCategory = categoriesData?.filter((category) => 
  category.name === currentPath.slice(1, currentPath.length));
  
  
  const filteredProducts = currentCategory[0].items.filter((item) => 
  item.name.split(' ').filter((word) => 
  word === selectedOption))
  
  
  console.log(filteredProducts)
    setProductsToRender(filteredProducts)
  }

}


  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label">
        {inputTitle}
      </label>
      {inputOptions.map((option, index) => (
        <div className="filter-options" key={index}>
          <input
            type="checkbox"
            id={option}
            name={inputTitle}
            value={option}
            onChange={handleCheckbox}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default GenderFilter;
