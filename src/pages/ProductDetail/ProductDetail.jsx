import React, { useContext } from 'react';
import './ProductDetail.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Heart from '../../components/ui/Heart/Heart';
import Modal from '../../components/ui/Modal/Modal';

import { ProductContext } from '../../App';
import { useModal } from '../../customHooks/useModal';


const ProductDetail = () => {
  const { productSelected } = useContext(ProductContext);
  const {isModalOpen, openModal, closeModal} = useModal()

  return (
    <div>
      <Header />
      <section className="product-detail">
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
        {productSelected ? (
          <figure className="product-detail-figure">
            <div className="product-detail-wrapper">
              <div className="name-and-heart-mobile">
                <h3 className="product-detail-name">{productSelected.name}</h3>
                <Heart product={productSelected} openModal={openModal}/>
              </div>

              <img
                className="product-detail-image"
                src={productSelected.image}
                alt={productSelected.name}
              />
              <div className="product-detail-text">
                <div className="name-and-heart-desktop">
                  <h3 className="product-detail-name">{productSelected.name}</h3>
                  <Heart product={productSelected} openModal={openModal}/>
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
