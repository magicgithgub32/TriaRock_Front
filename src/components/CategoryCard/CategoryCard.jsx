import React, { useContext } from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';

const CategoryCard = () => {
  const { categoriesData } = useContext(ProductContext);

  const orderedCategories = categoriesData?.sort((a, b) => {
    const categoryOrder = ['swimming', 'cycling', 'running'];
    return categoryOrder.indexOf(a.name) - categoryOrder.indexOf(b.name);
  });

  return (
    <>
      <section className="categories-banner">
        {orderedCategories?.map((categoryData) => (
          <figure key={categoryData._id}>
            <img src={categoryData.image} alt={categoryData.name} className="category-image" />
            <div className="category-data-container">
              <Link to={categoryData.name} className="category-cta">
                {categoryData.name}
              </Link>
            </div>
          </figure>
        ))}
      </section>
    </>
  );
};

export default CategoryCard;
