import ProductTypeFilter from '../ProductTypeFilter/ProductTypeFilter';
import './CollapsibleFilter.css';

export const CollapsibleFilter = () => {
  return (
    <>
      <button type="button" class="collapsible-filter">
        TIPO DE PRODUCTO
      </button>

      <ProductTypeFilter />
    </>
  );
};
