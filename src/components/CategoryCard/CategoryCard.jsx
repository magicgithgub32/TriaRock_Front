import React, { useState, useEffect } from 'react';
import './CategoryCard.css';
import { categoryFetch } from '../../services/categoryFetch';

const CategoryCard = () => {

  const categoriesData  = categoryFetch();
   
  return (
    <>
      {categoriesData?.map((categoryData) => (
        <div key={categoryData.id}>
          <img
            src={categoryData.image}
            alt={categoryData.name}
            className="category-image"
          />
          <p>SHOP {categoryData.name}</p>
        </div>
      ))}
    </>
  );
};

export default CategoryCard;
