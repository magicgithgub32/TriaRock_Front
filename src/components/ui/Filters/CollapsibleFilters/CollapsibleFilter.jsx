import React from 'react';
import './CollapsibleFilter.css';
import ProductTypeFilter from '../ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../GenderFilter/GenderFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import ClearFilters from '../ClearFilters/ClearFilters';
import Collapsible from 'react-collapsible';

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
  return (
    <section className="collapsible-filter-section">
      <Collapsible trigger="TIPO DE PRODUCTO + " className="filter-label">
        <ProductTypeFilter
          id="collapsible-filter-label"
          inputOptions={productTypes}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          productTypeRefs={productTypeRefs}
        />
      </Collapsible>

      <Collapsible trigger="GÉNERO + " className="filter-label">
        <GenderFilter
          id="collapsible-filter-label"
          inputOptions={genders}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          genderRefs={genderRefs}
        />
      </Collapsible>

      <Collapsible trigger="PRECIO + " className="filter-label">
        <PriceFilter
          id="collapsible-filter-label"
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          roundedHighestPrice={roundedHighestPrice}
          roundedLowestPrice={roundedLowestPrice}
        />
      </Collapsible>

      <ClearFilters
        setSelectedPrice={setSelectedPrice}
        roundedHighestPrice={roundedHighestPrice}
        setSelectedTypes={setSelectedTypes}
        setSelectedGender={setSelectedGender}
        productTypeRefs={productTypeRefs}
        genderRefs={genderRefs}
      />
    </section>
  );
};
