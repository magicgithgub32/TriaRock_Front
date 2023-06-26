import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import RegisterLogin from '../../../pages/RegisterLogin/Login';

const Button = ({ buttonLink, buttonText }) => {
  return (
    <>
      <Link to={buttonLink}>
        <button type="button" buttonText={buttonText}>
          {buttonText}
        </button>
      </Link>
    </>
  );
};

export default Button;
