import React from 'react';
import './Message.css';

const Message = ({ messageText, id }) => {
  return (
    <div className="message-container" id={id}>
      <p className="message">{messageText}</p>
    </div>
  );
};

export default Message;
