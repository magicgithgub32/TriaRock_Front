import React, { useState, useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';

import { ProductContext, SearchContext } from '../../App';
import ProductTypeFilter from '../../components/ui/Filters/ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../../components/ui/Filters/GenderFilter/GenderFilter';
import PriceFilter from '../../components/ui/Filters/PriceFilter/PriceFilter';
import ClearFilters from '../../components/ui/Filters/ClearFilters/ClearFilters';
import { highestAndLowestPrices } from '../../utils/highestAndLowestPrices';
import { genders } from '../../utils/filterProducts';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';

const CategoryPage = () => {
  const { setProductsToRender, productsToRender, categoriesData, allProducts } =
    useContext(ProductContext);

  const { searchClick } = useContext(SearchContext);

  const location = useLocation();
  const currentPath = location.pathname;

  const { roundedHighestPrice, roundedLowestPrice } = highestAndLowestPrices(
    categoriesData,
    currentPath
  );

  const [productTypes, setProductTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(roundedHighestPrice);
  const [selectedGender, setSelectedGender] = useState('');
  const [categoryItems, setCategoryItems] = useState([]);

  const genderRefs = useRef([]);
  const productTypeRefs = useRef([]);

  useEffect(() => {
    const categoryProducts = allProducts?.filter(
      (product) => product.category === currentPath.slice(1, currentPath.length)
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
    <div>
      <Header />
      <Title textTitle={currentPath.slice(1, currentPath.length)} />
      <main className="main-category-page">
        <section className="filter-section">
          <ProductTypeFilter
            inputOptions={productTypes}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            productTypeRefs={productTypeRefs}
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
            productTypeRefs={productTypeRefs}
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
      </main>

      <Footer id={filterProducts.length === 0 ? 'footer-category-page' : ''} />
    </div>
  );
};

export default CategoryPage;
