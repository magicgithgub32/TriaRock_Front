import React, { useState, useEffect, useContext, useRef } from 'react';
import './CategoryPage.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductTypeFilter from '../../components/ui/Filters/ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../../components/ui/Filters/GenderFilter/GenderFilter';
import PriceFilter from '../../components/ui/Filters/PriceFilter/PriceFilter';
import ClearFilters from '../../components/ui/Filters/ClearFilters/ClearFilters';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import CollapsibleFilter from '../../components/ui/Filters/CollapsibleFilters/CollapsibleFilter';

import { ProductContext, SearchContext } from '../../App';
import { highestAndLowestPrices } from '../../utils/highestAndLowestPrices';
import { genders } from '../../utils/filterProducts';
import { getCurrentPath } from '../../utils/currentPath';

const CategoryPage = () => {
  const { setProductsToRender, productsToRender, categoriesData, allProducts } =
    useContext(ProductContext);
  const { searchClick } = useContext(SearchContext);
  const { currentPath, validCurrentPath } = getCurrentPath();
  const { roundedHighestPrice, roundedLowestPrice } = highestAndLowestPrices(
    categoriesData,
    currentPath,
    validCurrentPath
  );

  const [productTypes, setProductTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(roundedHighestPrice);
  const [selectedGender, setSelectedGender] = useState('');
  const [categoryItems, setCategoryItems] = useState([]);

  const genderRefs = useRef([]);

  useEffect(() => {
    const categoryProducts = allProducts?.filter(
      (product) => product.category === validCurrentPath
    );
    setProductsToRender(categoryProducts);
    setCategoryItems(categoryProducts);

    setSelectedPrice(roundedHighestPrice);
    setSelectedTypes(''), setSelectedGender('');

    setProductsToRender(categoryProducts);
  }, [allProducts, currentPath]);

  useEffect(() => {
    const itemTypes = categoryItems.map((product) => product.name.split(' ')[0]);
    setProductTypes([...new Set(itemTypes)]);
  }, [categoryItems]);

  const filterProducts = categoryItems?.filter((product) => {
    if (
      (selectedTypes.includes(product.name.split(' ')[0]) || selectedTypes.length === 0) &&
      (product.name.toLowerCase().includes(selectedGender) || selectedGender === '') &&
      (Number(product.price.slice(0, -2).replace(',', '.')) <= selectedPrice ||
        selectedPrice === roundedHighestPrice)
    ) {
      return product;
    }
  });

  useEffect(() => {
    if (categoryItems.length > 0) {
      setProductsToRender(filterProducts);
    }
  }, [selectedTypes, selectedGender, selectedPrice]);

  return (
    <>
      <Header />
      <main className="main-category-page">
        <Title textTitle={currentPath.slice(1, currentPath.length)} />
        <div className="filter-and-products">
          <CollapsibleFilter
            productTypes={productTypes}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            genders={genders}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            genderRefs={genderRefs}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            roundedHighestPrice={roundedHighestPrice}
            roundedLowestPrice={roundedLowestPrice}
          />
          <section className="filters-section">
            <p className="filters-section-title">FILTROS</p>
            <ProductTypeFilter
              inputOptions={productTypes}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
            />
            <GenderFilter
              inputOptions={genders}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              genderRefs={genderRefs}
            />
            <PriceFilter
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              roundedHighestPrice={roundedHighestPrice}
              roundedLowestPrice={roundedLowestPrice}
            />
            <ClearFilters
              setSelectedPrice={setSelectedPrice}
              roundedHighestPrice={roundedHighestPrice}
              setSelectedTypes={setSelectedTypes}
              setSelectedGender={setSelectedGender}
              genderRefs={genderRefs}
            />
          </section>

          {searchClick ? (
            productsToRender?.length === 0 ? (
              <Message
                messageText="No results found. Please, double check your spelling."
                id="category-message"
              />
            ) : (
              <ProductCard />
            )
          ) : filterProducts.length === 0 ? (
            <Message
              messageText="There are no products matching your requirements."
              id="category-message"
            />
          ) : (
            <ProductCard />
          )}
        </div>
      </main>

      <Footer id={filterProducts.length === 0 ? 'footer-category-page' : ''} />
    </>
  );
};

export default CategoryPage;
