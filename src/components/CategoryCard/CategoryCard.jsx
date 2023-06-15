import React from 'react';
import './CategoryCard.css'
import { categoryFetch } from '../../services/categoryFetch';

const CategoryCard = () => {
    
const { categoriesData } = categoryFetch()
console.log(categoriesData)


  return (
    <>
    ${categoriesData.map((categoryData) => (

<div>
        <img src='https://s1.abcstatics.com/media/bienestar/2020/01/09/running-principiante-1-kSD--1248x698@abc.jpg' 
        alt={categoryData.name} className="category-image" />
        <p>SHOP {categoryData.name}</p>
    </div>

    ))
}

    
    </>
    )
}

export default CategoryCard