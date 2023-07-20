import React, { useState, useEffect, useContext, useRef } from 'react';
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
import { genders } from '../../utils/filterProducts';
import Title from '../../components/ui/Title/Title';

const CategoryPage = () => {
  const { setProductsToRender, productsToRender, categoriesData, allProducts } =
    useContext(ProductContext);

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
  const productTypeRefs = useRef([])


  //este le he puesto como en bestSellers xo eso no lo arregla. Lo arregla la condición añadida en el 3º
  useEffect(() => {
    const categoryProducts = allProducts?.filter(
      (product) => product.category === currentPath.slice(1, currentPath.length)
    );
    setProductsToRender(categoryProducts);
    setCategoryItems(categoryProducts);
  
  setSelectedPrice(roundedHighestPrice);
  setSelectedTypes(''),
  setSelectedGender('')
  
  setProductsToRender(categoryProducts);

  }, [allProducts, currentPath]);


  //Añado otro useEffect para los nombres del tipo de producto
  useEffect(() => {
    const itemTypes = categoryItems.map((product) => product.name.split(' ')[0]);
    setProductTypes([...new Set(itemTypes)]);
  }, [categoryItems]);


const filterProducts = categoryItems?.filter((product) => {
  console.log(selectedTypes)
    if (
      (selectedTypes.includes(product.name.split(' ')[0]) ||
      selectedTypes === '') || selectedTypes.length === 0 &&
      
      (product.name.toLowerCase().includes(selectedGender) ||
        selectedGender === '') &&
        
      (Number(product.price.slice(0, -2).replace(',', '.')) <= selectedPrice || 
      selectedPrice === roundedHighestPrice)
    ) {
      return product;
    } 
  });


  //añadir en esta condición que categoryItems no estuviera vacío.
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
          <GenderFilter inputOptions={genders} 
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
          {/* promo */}
          <ClearFilters
           setSelectedPrice={setSelectedPrice}
            roundedHighestPrice={roundedHighestPrice}
            setSelectedTypes={setSelectedTypes}
            setSelectedGender={setSelectedGender}
            productTypeRefs={productTypeRefs}
            genderRefs={genderRefs}
           />
        </section>
          <ProductCard />
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
