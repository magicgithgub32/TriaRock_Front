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
import Title from '../../components/ui/Title/Title';

const CategoryPage = () => {
  const { setProductsToRender, productsToRender, categoriesData } = useContext(ProductContext);

  const location = useLocation();
  const currentPath = location.pathname;

  const { roundedHighestPrice, roundedLowestPrice } = highestAndLowestPrices(
    categoriesData,
    currentPath
  );

  const [productTypes, setProductTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(roundedHighestPrice);
  const [selectedGender, setSelectedGender] = useState('');
  const [categoryItems, setCategoryItems] = useState([]);
  // const [isCleared, setIsCleared] = useState(false);

  // const filteredProducts = filterProducts(
  //   productsToRender,
  //   selectedTypes,
  //   selectedGender,
  //   selectedPrice,
  //   roundedHighestPrice
  // );

  const filteredProducts = filterProducts(
    categoryItems,
    selectedTypes,
    selectedGender,
    selectedPrice,
    roundedHighestPrice
  );

  useEffect(() => {

    categoriesData?.filter((category) => {
 
      if (category.name === currentPath.slice(1, currentPath.length)) {
        console.log(category.items)
        setProductsToRender(category.items);
        setCategoryItems(category.items);
        console.log(productsToRender);
        const itemTypes = category.items.map((product) => product.name.split(' ')[0]);
        setProductTypes([...new Set(itemTypes)]);
      }
    });
  }, [categoriesData, currentPath, selectedTypes, selectedGender, selectedPrice]);
  // isCleared

  useEffect(() => {
    if (productsToRender.length > 0) {
      setProductsToRender(filteredProducts);
    }
  }, [selectedTypes, selectedGender, selectedPrice]);

  return (
    <div>
      <Header />
      <Title textTitle={currentPath.slice(1, currentPath.length)}/>
    
      <main>
        <section className="filter-section">
          <ProductTypeFilter
            inputOptions={productTypes}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <GenderFilter inputOptions={genders} setSelectedGender={setSelectedGender} />
          <PriceFilter
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            roundedHighestPrice={roundedHighestPrice}
            roundedLowestPrice={roundedLowestPrice}
          />
          {/* promo */}
          {/* <ClearFilters
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
            setIsCleared={setIsCleared} */}
          {/* /> */}
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
