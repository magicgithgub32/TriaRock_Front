import React, { useContext } from 'react';
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import { ProductContext } from '../../App';
import Footer from '../../components/Footer/Footer';

const ProductDetail = () => {

  const { productSelected } = useContext(ProductContext);

  return (
    <>
      <Header />
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
                <h3 className="product-detail-name">{productSelected.name}</h3>

                {productSelected.promo ? (
                  <div className="promo-container">
                    <div
                      className={`product-detail-price ${
                        productSelected.promo ? 'promo-detail-price' : ''
                      }`}
                    >
                      <h3>{productSelected.price}</h3>
                    </div>
                    <h3 className="promo-label">SALE</h3>
                  </div>
                ) : (
                  <div
                    className={`product-detail-price ${
                      productSelected.promo ? 'promo-detail-price' : ''
                    }`}
                  >
                    <h3>{productSelected.price}</h3>
                  </div>
                )}
                <p>{productSelected.description}</p>
              </div>
            </div>
          </figure>
        ) : null}
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
