import React, { useContext } from 'react';
import './ProductDetail.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Heart from '../../components/ui/Heart/Heart';

import { ProductContext, UserContext } from '../../App';
import AlertModal from '../../components/Modal/Modal';

const ProductDetail = () => {
  const { productSelected } = useContext(ProductContext);
  const { setIsModalOpen, isModalOpen } = useContext(UserContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <AlertModal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Text"
        onClick={closeModal}
      />
      <section className="product-detail">
        {productSelected ? (
          <figure className="product-detail-figure">
            <div className="product-detail-wrapper">
              <div className="name-and-heart-mobile">
                <h3 className="product-detail-name">{productSelected.name}</h3>
                <Heart product={productSelected} />
              </div>

              <img
                className="product-detail-image"
                src={productSelected.image}
                alt={productSelected.name}
              />
              <div className="product-detail-text">
                <div className="name-and-heart-desktop">
                  <h3 className="product-detail-name">{productSelected.name}</h3>
                  <Heart product={productSelected} />
                </div>
                {productSelected.promo ? (
                  <div className="promo-container">
                    <div
                      className={`product-detail-price ${
                        productSelected.promo ? 'promo-detail-price' : ''
                      }`}
                    >
                      <h3>{productSelected.price}</h3>
                    </div>
                    <h3 className="promo-detail-label">SALE</h3>
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
    </div>
  );
};

export default ProductDetail;
