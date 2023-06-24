import React from 'react';
import { Link } from 'react-router-dom';
import './IconButton.css'

const IconButton = ({ buttonLink, srcImage, buttonText }) => {
  return (
    <>
      <Link to={buttonLink} className="icon-button-wrapper">
        <img src={srcImage} className="icon-button-image" />
        <p className="icon-text">{buttonText}</p>
      </Link>
    </>
  );
};

export default IconButton;