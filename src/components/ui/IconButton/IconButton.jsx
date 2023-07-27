import React from 'react';
import './IconButton.css';

import { Link } from 'react-router-dom';


const IconButton = ({ buttonLink, srcImage, buttonText, buttonEvent }) => {
  return (
    <>
      <Link to={buttonLink} className="icon-button-wrapper" onClick={buttonEvent}>
        <img src={srcImage} className="icon-button-image" />
        <p className="icon-text">{buttonText}</p>
      </Link>
    </>
  );
};

export default IconButton;
