import React from 'react';
import './Message.css';

const Message = ({ messageText, id }) => {
  return (
    <div id={id} className="message-container">
      <h3 className="message">{messageText}</h3>
    </div>
  );
};

export default Message;
