import React from 'react';
import './CollapsibleFilter.css';
import ProductTypeFilter from '../ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../GenderFilter/GenderFilter';
import PriceFilter from '../PriceFilter/PriceFilter';

export const CollapsibleFilter = () => {
  return (
     <section className="collapsible-filter-section">
      {/* <ProductTypeFilter /> */}
       <button type="button" className="collapsible-button">
        +
      </button>
      {/* <GenderFilter /> */}
       <button type="button" className="collapsible-button">
        +
      </button>
      <PriceFilter />
       <button type="button" className="collapsible-button">
        +
      </button>
      </section>
  );
};
