import React from 'react';
import './Message.css';

const Message = ({ messageText }) => {
  return (
    <div className="message-container">
      <h3 className="message">{messageText}</h3>
    </div>
  );
};

export default Message;
