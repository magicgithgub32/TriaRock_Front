import React, { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import ProductCard from '../../components/ProductCard/ProductCard';
import { categoryFetch } from '../../services/categoryFetch'

const CategoryPage = () => {

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
      <div className="product-card-wrapper">
      
      {productsToRender?.map((product) => (
        <figure className="product-card" key={product.name}>
          <div className="product-img-price-wrapper">
            <div className="product-img-wrapper">
              <img className="product-Img" src={product.image} alt={product.name} />
            </div>
            {product.promo ? (
              <div className="promo-container">
                <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                  <p>{product.price}</p>
                </div>
                <span className="promo-label">SALE</span>
              </div>
            ) : (
              <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                <p>{product.price}</p>
              </div>
            )}
          </div>

          <div className="product-description">
            <p>{product.name}</p>
          </div>
        </figure>
      ))}
    </div>

      {/* <ProductCard category={category}/> ponerle prop o let productsToRender or printProducts*/} 
      <Footer />
    </div>
  )
}

export default CategoryPage
