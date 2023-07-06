import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({ text }) => {
  return (
    <div className="alert-container">
      <h3 className="alert-message">{text}</h3>
    </div>
  );
};

export default AlertMessage;
