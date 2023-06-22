import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import { categoryFetch } from '../../services/categoryFetch';

import { ProductContext } from '../../App';
import ProductTypeFilter from '../../components/ui/Filters/ProductTypeFilter/ProductTypeFilter';
import GenderFilter from '../../components/ui/Filters/GenderFilter/GenderFilter';
import PriceFilter from '../../components/ui/Filters/PriceFilter/PriceFilter';

const CategoryPage = () => {
  const categoriesData = categoryFetch();

  const { productsToRender, setProductsToRender } = useContext(ProductContext);
  const [productTypes, setProductTypes] = useState([]);
  const genders = ['hombre', 'mujer', 'niño', 'niña'];
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    categoriesData?.filter((category) => {
      if (category.name === currentPath.slice(1, currentPath.length)) {
        setProductsToRender(category.items);
        const itemTypes = category.items.map((product) => product.name.split(' ')[0]);
        setProductTypes([...new Set(itemTypes)]);
      }
    });
  }, [categoriesData, currentPath]);

  return (
    <div>
      <Header />
      <p className="category-title">{currentPath.slice(1, currentPath.length)}</p>

      <main>
        <section className="filter-section">
          <ProductTypeFilter
            inputTitle="tipo de producto"
            inputOptions={productTypes}
            setProductTypes={setProductTypes}
            categoriesData={categoriesData}
            currentPath={currentPath}
          />
          <GenderFilter inputTitle="género" inputOptions={genders} 
           categoriesData={categoriesData}
           currentPath={currentPath}/>
          {/* <PriceFilter/> */}
          {/* promo y bestseller */}
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
