import React, { useState, useEffect, useContext } from 'react';
import './ProductTypeFilter.css';
import { ProductContext } from '../../../../App';

const ProductTypeFilter = ({ inputOptions,  excludedProducts, setExcludedProducts, typeIsSelected, setTypeIsSelected, selectedOptions, setSelectedOptions }) => {
  const { productsToRender, setProductsToRender, filteredProducts, setFilteredProducts } = useContext(ProductContext);
 

  const handleCheckbox = (ev) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, event.target.value]);
    } else {
      const selectedOptionsUpdated = selectedOptions.filter(
        (selectedOption) => selectedOption !== event.target.value
      );
      setSelectedOptions([...selectedOptionsUpdated]);
    }
    const typesToExclude = inputOptions.filter((inputOption) => inputOption !== event.target.value);
    if (event.target.checked) {
      setTypeIsSelected(true);
      setFilteredProducts(
        productsToRender.filter((product) => {
          const productName = product.name.toLowerCase();
          const containsExcludedWords = typesToExclude.some((word) =>
            productName.includes(word.toLowerCase())
          );
          return !containsExcludedWords;
        })
      );
      setExcludedProducts(
        productsToRender.filter((product) => {
          const productName = product.name.toLowerCase();
          const containsExcludedWords = typesToExclude.some((word) =>
            productName.includes(word.toLowerCase())
          );
          return containsExcludedWords;
        })
      );
    } else {
      setTypeIsSelected(false);
      setFilteredProducts([...filteredProducts, ...excludedProducts]);
    }
  };

  useEffect(() => {
    setProductsToRender(filteredProducts);
  }, [selectedOptions]);

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
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default ProductTypeFilter;
