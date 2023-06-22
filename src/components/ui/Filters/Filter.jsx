import React, { useState, useEffect, useContext } from 'react';
import './Filter.css';
import { ProductContext } from '../../../App';

const Filter = ({ inputTitle, inputOptions, categoriesData }) => {

const { productsToRender, setProductsToRender } = useContext(ProductContext);
const [selectedOptions, setSelectedOptions] = useState([]);

const handleCheckbox = (ev) => {
const filteredProducts = productsToRender.filter((product) => product.name.split(' ')[0] === ev.target.value)
setProductsToRender(filteredProducts)
}


  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label">
        {inputTitle}
      </label>
      {inputOptions.map((option, index) => (
        <div className="filter-options" key={index}>
          <input type="checkbox" id={option} name={inputTitle} value={option} 
          onChange={handleCheckbox} 
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
