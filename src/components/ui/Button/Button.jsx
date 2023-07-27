import React from 'react';
import './Button.css';

const Button = ({ buttonText, className }) => {
  return (
    <>
      <button type="submit" className={className}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
