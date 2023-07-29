import React from 'react';
import './Modal.css';
import Message from '../Message/Message';


const Modal = ( {isModalOpen, closeModal} ) => {


  return (
    <div className={isModalOpen ? "open-modal" : "closed-modal"}
    >
      <p>Please log in to your account or create a new one so you can see and save your favorite products.</p>
      {/* <Message messageText="Please log in to your account or create a new one so you can see and save your favorite products." /> */}
    <button className="modal-button" onClick={closeModal}>X</button>
    </div>
  );
};

export default Modal;
