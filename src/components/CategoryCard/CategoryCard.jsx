import React, { useState, useEffect } from 'react';
import './CategoryCard.css';
import { categoryFetch } from '../../services/categoryFetch';
import { Link } from 'react-router-dom';

const CategoryCard = () => {

  const categoriesData  = categoryFetch();

 const orderedCategories = categoriesData?.sort((a, b) => {
    const categoryOrder = ["swimming", "cycling", "running"];
    return categoryOrder.indexOf(a.name) - categoryOrder.indexOf(b.name);
  })
   
  return (
    <>
    <section className="categories-banner">
      {orderedCategories?.map((categoryData) => (
        <figure key={categoryData.id}>
          <img
            src={categoryData.image}
            alt={categoryData.name}
            className="category-image"
          />
          <Link to={categoryData.name} className="category-cta">
          SHOP {categoryData.name}
          </Link>
        </figure>
      ))}
      </section>
    </>
  );
};

export default CategoryCard;
