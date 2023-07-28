import React, { useEffect, useContext } from 'react';
import './SearchInput.css';
import { useLocation } from 'react-router-dom';

import { ProductContext, SearchContext } from '../../../App';
import { getCurrentPath } from '../../../utils/currentPath';

const SearchInput = ({ id }) => {
  const { allProducts, setProductsToRender, productsToRender } = useContext(ProductContext);
  const { searchInput, setSearchInput, searchClick, setSearchClick } = useContext(SearchContext);
  const { currentPath, validCurrentPath } = getCurrentPath(useLocation);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchClick(!searchClick);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleSearchClick();
  };

  useEffect(() => {
    if (searchClick) {
      if (currentPath !== '/') {
        setProductsToRender(
          allProducts.filter(
            (product) =>
              product.name.toLowerCase().includes(searchInput.toLowerCase()) &&
              product.category === validCurrentPath
          )
        );
      } else {
        setProductsToRender(
          allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        );
      }
    } else {
      if (currentPath !== '/') {
        setProductsToRender(
          allProducts?.filter((product) => product.category === validCurrentPath)
        );
      } else {
        setProductsToRender(allProducts?.filter((product) => product.bestSeller === true));
      }
      setSearchInput('');
    }
  }, [searchClick]);

  return (
    <div className="search-input-section" id={id}>
      <input
        className="input"
        type="text"
        placeholder="Find your product"
        onChange={handleSearchInput}
        value={searchInput}
        onKeyDown={handleKeyDown}
      />
      <img
        src={searchClick ? './x.svg' : './search.svg'}
        className="search-icon"
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default SearchInput;
