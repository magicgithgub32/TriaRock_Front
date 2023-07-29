import React, { useContext } from 'react';
import './ProductCard.css';

import Heart from '../ui/Heart/Heart';
import Modal from '../ui/Modal/Modal';

import { ProductContext } from '../../App';
import { Link } from 'react-router-dom';
import { useModal } from '../../customHooks/useModal';


const ProductCard = () => {
  const { productsToRender, setProductSelected } = useContext(ProductContext);
  const { isModalOpen, openModal, closeModal } = useModal()

  const handleClick = (product) => {
    setProductSelected(product);
  };

  return (
    // <section  className="modal-and-products">
    
    <div
      className={`product-cards-wrapper${productsToRender?.length === 1 ? '-one-product' : ''}`}
    >
     
       <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
      
      {productsToRender?.map((product) => (
        <figure className="product-card" key={product._id}>
          <div className="product-img-price-wrapper">
            <div className="product-img-wrapper">
              <Link to="/product-detail">
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.name}
                  onClick={() => handleClick(product)}
                />
              </Link>
            </div>

            <div className="promo-container">
              <div className={`product-price ${product.promo ? 'promo-price' : ''}`}>
                <p>{product.price}</p>
              </div>

              {product.promo ? <span className="promo-label">SALE</span> : <span></span>}
              <Heart product={product} openModal={openModal}/>
            </div>
          </div>
          <div className="product-description">
            <p>{product.name}</p>
          </div>
        </figure>
      ))}
    </div>
  //  </section>
      );
};

export default ProductCard;
