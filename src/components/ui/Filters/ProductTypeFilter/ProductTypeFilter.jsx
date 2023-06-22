import React, { useState, useEffect, useContext } from 'react';
import './ProductTypeFilter.css';
import { ProductContext } from '../../../../App';

const ProductTypeFilter = ({ inputTitle, inputOptions, currentPath, categoriesData }) => {
  const { setProductsToRender } = useContext(ProductContext);
  const [selectedOptions, setSelectedOptions] = useState([]);

const handleCheckbox = (ev) => {
setSelectedOptions([...selectedOptions, ev.target.value])
}

useEffect(() => {
  if (categoriesData) {
  const currentCategory = categoriesData?.filter((category) => 
category.name === currentPath.slice(1, currentPath.length));

  const filteredProducts = currentCategory[0].items.filter((item) =>
    selectedOptions.includes(item.name.split(' ')[0]) 
  )
  setProductsToRender(filteredProducts)
}
},[selectedOptions])

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

export default ProductTypeFilter;
