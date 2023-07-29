import React, { useContext } from 'react';
import './Heart.css';

import { ProductContext, UserContext } from '../../../App';
import { favPutFetch } from '../../../services/favPutFetch';
import Modal from '../Modal/Modal';
import { useModal } from '../../../customHooks/useModal';

const Heart = ({ product }) => {
  const { userFavs, setUserFavs } = useContext(ProductContext);
  const { isLoggedIn } = useContext(UserContext);
  const {openModal, closeModal, isModalOpen} = useModal()

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
              <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
      <img
        src={
          typeof userFavs[0] === 'string'
            ? userFavs?.includes(product._id)
              ? './assets/red-heart.png'
              : './assets/yellow-heart.svg'
            : userFavs?.some((favProduct) => favProduct._id === product._id)
            ? './assets/red-heart.png'
            : './assets/yellow-heart.svg'
        }
        className="heart"
        alt="heart"
        onClick={() => handleHeart(product)}
      />
     
    </div>
  );
};

export default Heart;
