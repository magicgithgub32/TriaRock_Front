import React, { useEffect, useContext } from 'react'
import './SearchInput.css'
import { ProductContext, SearchContext } from '../../../App'

const SearchInput = () => {

    const { allProducts, setProductsToRender } = useContext(ProductContext)
    const {searchInput, setSearchInput, searchClick, setSearchClick } = useContext(SearchContext)

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)       
    }

    const handleSearchClick = () => {
    setSearchClick(!searchClick)
    }

    useEffect(() => {
    if (searchClick) {
      setProductsToRender(allProducts.filter((product) => 
    (product.name.toLowerCase()).includes(searchInput.toLowerCase())));
  } else {
      setProductsToRender(allProducts?.filter((product) => product.bestSeller === true))
      setSearchInput("")
    }},[searchClick])


  return (
          <div className="search-section">
          <input type="text" className="search-product-input" 
          placeholder="Find your product"
          onChange={handleSearchInput}
         value={searchInput}
         />
          <img 
          src={searchClick ? "./src/assets/x.svg" : "./src/assets/search.svg"} 
          className="search-icon" 
          onClick={handleSearchClick}
          />
        </div>
  )
}

export default SearchInput