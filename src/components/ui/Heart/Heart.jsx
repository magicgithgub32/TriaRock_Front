import React, { useContext } from 'react';
import './Heart.css';

import Modal from '../../Modal/Modal';

import { ProductContext, UserContext } from '../../../App';
import { favPutFetch } from '../../../services/favPutFetch';
import { useModal } from '../../../customHooks/useModal';

const Heart = ({ product }) => {
  const { userFavs, setUserFavs } = useContext(ProductContext);
  const { isLoggedIn } = useContext(UserContext);
  const { isModalOpen, openModal, closeModal } = useModal()

  const handleHeart = (product) => {
    if (!isLoggedIn) {
      openModal();
    } else {
      const bodyData = { fav: product._id };
      favPutFetch(bodyData, setUserFavs, userFavs);
    }
  };

  return (
    <div className="hearts-container">
      <img
        src={
          typeof userFavs[0] === 'string'
            ? userFavs?.includes(product._id)
              ? './red-heart.png'
              : './yellow-heart.svg'
            : userFavs?.some((favProduct) => favProduct._id === product._id)
            ? './red-heart.png'
            : './yellow-heart.svg'
        }
        className="heart"
        alt="heart"
        onClick={() => handleHeart(product)}
      />
       <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
    </div>
  );
};

export default Heart;
