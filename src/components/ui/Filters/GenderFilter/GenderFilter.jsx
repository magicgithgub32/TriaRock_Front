import React, { useState, useEffect, useContext, useRef } from 'react';
import { ProductContext } from '../../../../App';

const GenderFilter = ({ inputOptions, excludedProducts, setExcludedProducts, genderIsSelected, setGenderIsSelected }) => {
  const { productsToRender, setProductsToRender, filteredProducts, setFilteredProducts } = useContext(ProductContext);


  const genderRefs = useRef([]);
    
  
const handleCheckbox = (ev) => {

genderRefs.current.map((genderRef) => {
    if (genderRef.value !== event.target.value && event.target.checked) {
      genderRef.disabled = true
    } else if (genderRef.value !== event.target.value && !event.target.checked) {
      genderRef.disabled = false}
  })

const gendersToExclude = inputOptions.filter((inputOption) => inputOption !== event.target.value)
if (event.target.checked) {
setGenderIsSelected(true)
setFilteredProducts(productsToRender.filter(product => {
  const productName = product.name.toLowerCase();
  const containsExcludedWords = gendersToExclude.some(word => productName.includes(word.toLowerCase()));
  return !containsExcludedWords
  }))
setExcludedProducts(productsToRender.filter(product => {
  const productName = product.name.toLowerCase();
  const containsExcludedWords = gendersToExclude.some(word => productName.includes(word.toLowerCase()));
  return containsExcludedWords
  }))
} else {
setGenderIsSelected(false)
setFilteredProducts([...filteredProducts, ...excludedProducts])
}
}

useEffect(() => {
  setProductsToRender(filteredProducts)
},[genderIsSelected])


  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label">
        género
      </label>
      {inputOptions.map((option, index) => (
        <div className="filter-options" key={index}>
          <input
            type="checkbox"
            id={option}
            name="género"
            value={option}
            onChange={handleCheckbox}
            ref={(el) => (genderRefs.current[index] = el)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default GenderFilter;
