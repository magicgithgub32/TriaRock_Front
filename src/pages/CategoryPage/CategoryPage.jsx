import React, { useEffect, useContext } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import { categoryFetch } from '../../services/categoryFetch';
import { ProductContext } from '../../App';
import Filter from '../../components/ui/Filters/Filter';
import PriceFilter from '../../components/ui/Filters/PriceFilter';


const CategoryPage = () => {

    const { productsToRender, setProductsToRender } = useContext(ProductContext);
    const categoriesData  = categoryFetch();

const location = useLocation();
const currentPath = location.pathname;

useEffect(() => {
    categoriesData?.filter((category) => {
        if (category.name === currentPath.slice(1,currentPath.length)) {
        setProductsToRender(category.items)
        }
})
}, [categoriesData]);

const productTypes = [
  ...new Set(productsToRender.map((product) =>
  product.name.split(' ')[0]
))
];

const genders = ['hombre', 'mujer', 'niño', 'niña']

  return (
    <div>
      <Header />
      <p className="category-title">{currentPath.slice(1,currentPath.length)}</p>
      
      <main>
      <section className="filter-section">     
      <Filter inputTitle="tipo de producto" inputOptions={productTypes}/> 
      <Filter inputTitle="género" inputOptions={genders}/> 
      <PriceFilter/>
   {/* promo y bestseller */}
      </section>
      <section className="products-section">  
      <ProductCard/>
      </section>
      </main>

      <Footer />
    </div>
  )
}

export default CategoryPage
