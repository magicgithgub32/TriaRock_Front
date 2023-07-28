import React from 'react';
import './Modal.css';
import Message from '../ui/Message/Message';


const Modal = ( {isModalOpen, closeModal} ) => {


  return (
    <div className={isModalOpen ? "open-modal" : "closed-modal"}>
      <Message messageText="Please log in to your account or create a new one so you can see and save your favorite products." />
    <button onClick={closeModal}>X</button>
    </div>
  );
};

export default Modal;
