import React, { useEffect, useContext } from 'react';
import './SearchInput.css';
import { ProductContext, SearchContext } from '../../../App';
import Input from '../Input/Input';
import { useLocation } from 'react-router-dom';

const SearchInput = ({ id }) => {
  const { allProducts, setProductsToRender, productsToRender } = useContext(ProductContext);
  const { searchInput, setSearchInput, searchClick, setSearchClick } = useContext(SearchContext);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchClick(!searchClick);
  };

  const validCurrentPath = currentPath.slice(1, currentPath.length);
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
      <Input
        type="text"
        placeholder="Find your product"
        onChange={handleSearchInput}
        value={searchInput}
      />
      <img
        src={searchClick ? './src/assets/x.svg' : './src/assets/search.svg'}
        className="search-icon"
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default SearchInput;
