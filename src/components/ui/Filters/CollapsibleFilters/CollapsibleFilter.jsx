import React from 'react';
import './CollapsibleFilter.css';

import Collapsible from 'react-collapsible';
import ProductTypeFilter from '../ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../GenderFilter/GenderFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import ClearFilters from '../ClearFilters/ClearFilters';

const CollapsibleFilter = ({
  productTypes,
  selectedTypes,
  setSelectedTypes,
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
      <Collapsible
        trigger="FILTROS ☰"
        triggerClassName="main-filter-title"
        triggerOpenedClassName="main-filter-title"
      >
        <div className="collapsible-filters">
          <Collapsible trigger="TIPO DE PRODUCTO + ">
            <ProductTypeFilter
              id="collapsible-filter-label"
              inputOptions={productTypes}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
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
          genderRefs={genderRefs}
        />
      </Collapsible>
    </section>
  );
};

export default CollapsibleFilter