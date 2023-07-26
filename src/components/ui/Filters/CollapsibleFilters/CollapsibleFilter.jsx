import React from 'react';
import './CollapsibleFilter.css';
import Collapsible from 'react-collapsible';
import ProductTypeFilter from '../ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../GenderFilter/GenderFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import ClearFilters from '../ClearFilters/ClearFilters';


export const CollapsibleFilter = ({
  productTypes,
  selectedTypes,
  setSelectedTypes,
  productTypeRefs,
  genders,
  selectedGender,
  setSelectedGender,
  genderRefs,
  selectedPrice,
  setSelectedPrice,
  roundedHighestPrice,
  roundedLowestPrice
}) => {

  const showFilters = () => {
    
  }

  return (
    <section className="collapsible-filter-section">
      <Collapsible trigger="FILTROS ☰" triggerClassName="main-filter-title"
      triggerOpenedClassName="main-filter-title">
      <div className="collapsible-filters">
      <Collapsible trigger="TIPO DE PRODUCTO + ">
        <ProductTypeFilter
          id="collapsible-filter-label"
          inputOptions={productTypes}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          productTypeRefs={productTypeRefs}
        />
      </Collapsible>

      <Collapsible trigger="GÉNERO + ">
        <GenderFilter
          id="collapsible-filter-label"
          inputOptions={genders}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          genderRefs={genderRefs}
        />
      </Collapsible>

      <Collapsible trigger="PRECIO + ">
        <PriceFilter
          id="collapsible-filter-label"
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          roundedHighestPrice={roundedHighestPrice}
          roundedLowestPrice={roundedLowestPrice}
        />
      </Collapsible>
      </div>
      <ClearFilters
        setSelectedPrice={setSelectedPrice}
        roundedHighestPrice={roundedHighestPrice}
        setSelectedTypes={setSelectedTypes}
        setSelectedGender={setSelectedGender}
        productTypeRefs={productTypeRefs}
        genderRefs={genderRefs}
      />
      </Collapsible>
    </section>
  );
};
