import React, { useState, useEffect, useContext } from 'react';
import './GenderFilter.css';
import { ProductContext } from '../../../../App';

const GenderFilter = ({ inputTitle, inputOptions, currentPath, categoriesData }) => {
  const { productsToRender, setProductsToRender } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [excludedProducts, setExcludedProducts] = useState([])
  const [selectedOption, setSelectedOption] = useState()
  

const handleCheckbox = (ev) => {
const gendersToExclude = inputOptions.filter((inputOption) => inputOption !== ev.target.value)
if (ev.target.checked) {
setSelectedOption(ev.target.value)

setExcludedProducts(productsToRender.filter(product => {
  const productName = product.name.toLowerCase();
  const containsExcludedWords  = gendersToExclude.some(word => productName.includes(word.toLowerCase()));
  return !containsExcludedWords 
}))

}
}


useEffect(() => {
  console.log(excludedProducts)
  const backProducts = [...filteredProducts, ...excludedProducts] 
  setProductsToRender(backProducts)
},[selectedOption])


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
