import React, { useState, useEffect, useContext } from 'react';
import './Filter.css';
import { ProductContext } from '../../../App';

const Filter = ({ inputTitle, inputOptions, currentPath, categoriesData }) => {
  const { productsToRender, setProductsToRender } = useContext(ProductContext);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allFilteredProducts, setAllFilteredProducts] = useState([]);

  // const handleCheckbox = (ev) => {
  //   const filteredProducts = productsToRender.filter(
  //     (product) => product.name.split(' ')[0] === ev.target.value
  //   );
  //   setProductsToRender(filteredProducts);
  // };

  // useEffect(() => {
  //   setProductsToRender(allFilteredProducts);
  // }, [allFilteredProducts]);

  const handleCheckbox = (ev) => {
    if (categoriesData) {
      const filteredCategory = categoriesData?.filter(
        (category) => category.name === currentPath.slice(1, currentPath.length)
      );

      if (filteredCategory.length > 0) {
        console.log('filteredCategory', filteredCategory);
        const filteredProducts = filteredCategory[0].items.reduce((acc, item) => {
          if (item.name.split(' ')[0] === ev.target.value) {
            return acc.concat(item);
          }
          return acc;
        }, []);

        setProductsToRender(filteredProducts);

        // console.log('filteredProducts', filteredProducts);
        // console.log('allFilteredProducts', allFilteredProducts);
        // setProductsToRender([allFilteredProducts, filteredProducts]);
        // setAllFilteredProducts([...filteredProducts, filteredProducts]);
      } else {
        setProductsToRender([]);
      }
    }
  };
  console.log('productsToRender', productsToRender);

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

export default Filter;
