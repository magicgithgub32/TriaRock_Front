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
import { filterProducts, genders } from '../../utils/filterProducts';

const CategoryPage = () => {
  const { setProductsToRender, productsToRender, categoriesData } = useContext(ProductContext);
  const [productTypes, setProductTypes] = useState([]);
  const [excludedProducts, setExcludedProducts] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [typeIsSelected, setTypeIsSelected] = useState(false);
  const [genderIsSelected, setGenderIsSelected] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const { roundedHighestPrice, roundedLowestPrice } = highestAndLowestPrices(
    categoriesData,
    currentPath
  );
  const [selectedPrice, setSelectedPrice] = useState(roundedHighestPrice);
  const [isCleared, setIsCleared] = useState(false);
  const [selectedGender, setSelectedGender] = useState();

  useEffect(() => {
    categoriesData?.filter((category) => {
      if (category.name === currentPath.slice(1, currentPath.length)) {
        setProductsToRender(category.items);
        const itemTypes = category.items.map((product) => product.name.split(' ')[0]);
        setProductTypes([...new Set(itemTypes)]);
      }
    });
  }, [categoriesData, currentPath, isCleared]);

  useEffect(() => {
    filterProducts(selectedGender, selectedPrice, productsToRender, selectedTypes);

    setProductsToRender(filteredProducts);
  }, [selectedPrice, selectedTypes, selectedGender]);

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
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
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
            selectedGender={selectedGender}
          />
          <PriceFilter
            currentPath={currentPath}
            excludedProducts={excludedProducts}
            setExcludedProducts={setExcludedProducts}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            roundedHighestPrice={roundedHighestPrice}
            roundedLowestPrice={roundedLowestPrice}
          />
          {/* promo */}
          <ClearFilters
            setExcludedProducts={setExcludedProducts}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            typeIsSelected={typeIsSelected}
            setTypeIsSelected={setTypeIsSelected}
            genderIsSelected={genderIsSelected}
            setGenderIsSelected={setGenderIsSelected}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
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
