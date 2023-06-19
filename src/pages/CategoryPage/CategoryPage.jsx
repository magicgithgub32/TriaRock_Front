import React, { useEffect, useContext } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import { categoryFetch } from '../../services/categoryFetch';
import { ProductContext } from '../../App';


const CategoryPage = () => {

    const { setProductsToRender } = useContext(ProductContext);
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


  return (
    <div>
      <Header />
      <p className="category-title">{currentPath.slice(1,currentPath.length)}</p>
      <ProductCard/>
      <Footer />
    </div>
  )
}

export default CategoryPage
