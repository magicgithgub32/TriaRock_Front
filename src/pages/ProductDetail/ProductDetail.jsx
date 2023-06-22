import React, { useContext } from 'react';
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import { ProductSelectedContext } from '../../App';

const ProductDetail = () => {
  const productSelectedContext = useContext(ProductSelectedContext);
  const { productSelected } = productSelectedContext;
  console.log('Product Detail at Product Detail', productSelected);

  return (
    <>
      <Header />
      {/* <div className="product-detail-logo-wrapper">
        <img className="product-detail-logo" src="./triarock-logo.png" alt="logo" />
        <p className="brand">TRIAROCK</p>
      </div> */}
      <section className="product-detail">
        {productSelected ? (
          <figure className="product-detail-figure">
            <div className="product-detail-wrapper">
              <img
                className="product-detail-image"
                src={productSelected.image}
                alt={productSelected.name}
              />
              <div className="product-detail-text">
                <h2 className="product-detail-name">{productSelected.name}</h2>
                <p className="product-detail-description">{productSelected.description}</p>
                <h2 className="product-detail-price">{productSelected.price}</h2>
              </div>
            </div>
          </figure>
        ) : null}
      </section>
    </>
  );
};

export default ProductDetail;
