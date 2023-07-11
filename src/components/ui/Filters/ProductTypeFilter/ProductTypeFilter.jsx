import React from 'react';
import './ProductTypeFilter.css';

const ProductTypeFilter = ({ inputOptions, selectedTypes, setSelectedTypes }) => {
  // const handleCheckbox = (event) => {
  //   console.log(event.target.value)
  //   if (event.target.checked) {
  //     setSelectedTypes([...selectedTypes, event.target.value]);
  //   } else {
  //     const selectedTypesUpdated = selectedTypes.filter(
  //       (selectedOption) => selectedOption !== event.target.value
  //     );
  //     setSelectedTypes([...selectedTypesUpdated]);
  //   }
  // }

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

  // const typesToExclude = inputOptions.filter((inputOption) => inputOption !== event.target.value);
  // if (event.target.checked) {
  //   setTypeIsSelected(true);

  //   setFilteredProducts(
  //     productsToRender.filter((product) => {
  //       const productName = product.name.toLowerCase();
  //       const containsExcludedWords = typesToExclude.some((word) =>
  //         productName.includes(word.toLowerCase())
  //       );
  //       return !containsExcludedWords;
  //     })
  //   );
  //   setExcludedProducts(
  //     productsToRender.filter((product) => {
  //       const productName = product.name.toLowerCase();
  //       const containsExcludedWords = typesToExclude.some((word) =>
  //         productName.includes(word.toLowerCase())
  //       );
  //       return containsExcludedWords;
  //     })
  //   );
  // } else {
  //   setTypeIsSelected(false);
  //   setFilteredProducts([...filteredProducts, ...excludedProducts]);
  // }

  // useEffect(() => {
  //   setProductsToRender(filteredProducts);
  //   console.log('productsToRender', productsToRender);
  // }, [selectedTypes]);

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
