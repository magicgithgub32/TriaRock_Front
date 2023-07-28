import { React, useContext } from 'react';
import './Modal.css';
import Modal from 'react-modal';
import { UserContext } from '../../App';

const AlertModal = ({ contentLabel, isOpen, onRequestClose, onClick }) => {
  const { isModalOpen, setIsModalOpen } = useContext(UserContext);

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
      >
        <button onClick={onClick}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default AlertModal;
