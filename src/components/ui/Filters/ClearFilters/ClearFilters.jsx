import React, { useContext } from 'react'
import './ClearFilters.css'
import { ProductContext } from '../../../../App';
import { highestAndLowestPrices } from '../../../../utils/highestAndLowestPrices';
 

const ClearFilters = ({ setExcludedProducts, setTypeIsSelected, setSelectedOptions, setGenderIsSelected, setPriceInput, roundedHighestPrice}) => {

    const { setFilteredProducts } = useContext(ProductContext);

    const handleClearFilters = () => {
    
    setFilteredProducts([])
    setExcludedProducts([])
    setSelectedOptions([])
    setTypeIsSelected(false)
    setGenderIsSelected(false)
    setPriceInput(roundedHighestPrice)
    
    }

  return (
    <div>
<button onClick={handleClearFilters}>Clear</button>

    </div>
  )
}

export default ClearFilters