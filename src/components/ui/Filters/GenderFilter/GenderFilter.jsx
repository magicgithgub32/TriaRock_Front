import React, { useState, useEffect, useContext, useRef } from 'react';
import './GenderFilter.css';
import { ProductContext } from '../../../../App';

const GenderFilter = ({ inputTitle, inputOptions, currentPath, categoriesData }) => {
  const { productsToRender, setProductsToRender } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [excludedProducts, setExcludedProducts] = useState([])
  const [genderIsSelected, setGenderIsSelected] = useState(false)

  const genderRefs = useRef([]);
    
  
const handleCheckbox = (ev) => {

genderRefs.current.map((genderRef) => {
    if (genderRef.value !== ev.target.value && ev.target.checked) {
      genderRef.disabled = true
    } else if (genderRef.value !== ev.target.value && !ev.target.checked) {
      genderRef.disabled = false}
  })

const gendersToExclude = inputOptions.filter((inputOption) => inputOption !== ev.target.value)
if (ev.target.checked) {
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
