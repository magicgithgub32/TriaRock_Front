import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';

import { ProductContext } from '../../App';
import ProductTypeFilter from '../../components/ui/Filters/ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../../components/ui/Filters/GenderFilter/GenderFilter';
import PriceFilter from '../../components/ui/Filters/PriceFilter/PriceFilter';
import ClearFilters from '../../components/ui/Filters/ClearFilters/ClearFilters';
import { highestAndLowestPrices } from '../../utils/highestAndLowestPrices';

const CategoryPage = () => {
  const { setProductsToRender, categoriesData } = useContext(ProductContext);
  const [productTypes, setProductTypes] = useState([]);
  const [excludedProducts, setExcludedProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [typeIsSelected, setTypeIsSelected] = useState(false);
  const [genderIsSelected, setGenderIsSelected] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const { roundedHighestPrice, roundedLowestPrice } = highestAndLowestPrices(
    categoriesData,
    currentPath
  );
  const [priceInput, setPriceInput] = useState(roundedHighestPrice);
  const genders = ['hombre', 'mujer', 'infantil'];
  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    categoriesData?.filter((category) => {
      if (category.name === currentPath.slice(1, currentPath.length)) {
        setProductsToRender(category.items);
        const itemTypes = category.items.map((product) => product.name.split(' ')[0]);
        setProductTypes([...new Set(itemTypes)]);
      }
    });
  }, [categoriesData, currentPath, isCleared]);

  return (
    <div>
      <Header />
      <p className="category-title">{currentPath.slice(1, currentPath.length)}</p>

      <main>
        <section className="filter-section">
          <ProductTypeFilter
            inputOptions={productTypes}
            excludedProducts={excludedProducts}
            setExcludedProducts={setExcludedProducts}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            typeIsSelected={typeIsSelected}
            setTypeIsSelected={setTypeIsSelected}
            currentPath={currentPath}
          />
          <GenderFilter
            inputOptions={genders}
            excludedProducts={excludedProducts}
            setExcludedProducts={setExcludedProducts}
            genderIsSelected={genderIsSelected}
            setGenderIsSelected={setGenderIsSelected}
          />
          <PriceFilter
            currentPath={currentPath}
            excludedProducts={excludedProducts}
            setExcludedProducts={setExcludedProducts}
            priceInput={priceInput}
            setPriceInput={setPriceInput}
            roundedHighestPrice={roundedHighestPrice}
            roundedLowestPrice={roundedLowestPrice}
          />
          {/* promo */}
          <ClearFilters
            setExcludedProducts={setExcludedProducts}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            typeIsSelected={typeIsSelected}
            setTypeIsSelected={setTypeIsSelected}
            genderIsSelected={genderIsSelected}
            setGenderIsSelected={setGenderIsSelected}
            priceInput={priceInput}
            setPriceInput={setPriceInput}
            roundedHighestPrice={roundedHighestPrice}
            isCleared={isCleared}
            setIsCleared={setIsCleared}
          />
        </section>
        
        <section className="products-section">
          <ProductCard />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
