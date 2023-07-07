import React, { useState, useEffect, useContext } from 'react';
import './ProductTypeFilter.css';
import { ProductContext } from '../../../../App';

const ProductTypeFilter = ({
  inputOptions,
  excludedProducts,
  setExcludedProducts,
  setTypeIsSelected,
  selectedOptions,
  setSelectedOptions,
  currentPath
}) => {
  const {
    productsToRender,
    setProductsToRender,
    filteredProducts,
    setFilteredProducts,
    categoriesData
  } = useContext(ProductContext);

  const getAllCategoryProducts = () => {
    const allCategoryProducts = categoriesData?.filter((category) => {
      if (category.name === currentPath.slice(1, currentPath.length)) {
        return allCategoryProducts;
      }
    });
  };

  getAllCategoryProducts();

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, event.target.value]);
    } else {
      const selectedOptionsUpdated = selectedOptions.filter(
        (selectedOption) => selectedOption !== event.target.value
      );
      setSelectedOptions([...selectedOptionsUpdated]);
    }
    console.log('selectedOptions', selectedOptions);

    const typesToExclude = inputOptions.filter((inputOption) => inputOption !== event.target.value);
    if (event.target.checked) {
      setTypeIsSelected(true);
      if (selectedOptions.length < 2) {
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
        setFilteredProducts(
          allCategoryProducts.filter((product) => {
            const productName = product.name.toLowerCase();
            const containsExcludedWords = typesToExclude.some((word) =>
              productName.includes(word.toLowerCase())
            );
            return !containsExcludedWords;
          })
        );
        setExcludedProducts(
          allCategoryProducts.filter((product) => {
            const productName = product.name.toLowerCase();
            const containsExcludedWords = typesToExclude.some((word) =>
              productName.includes(word.toLowerCase())
            );
            return containsExcludedWords;
          })
        );
      }
    } else {
      setTypeIsSelected(false);
      setFilteredProducts([...filteredProducts, ...excludedProducts]);
    }
    console.log('filteredProducts', filteredProducts);
    console.log('excludedProducts', excludedProducts);
  };

  useEffect(() => {
    setProductsToRender(filteredProducts);
    console.log('productsToRender', productsToRender);
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
