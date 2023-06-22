import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-section">
        <img className="logo" src="./triarock-logo.png" alt="logo" />
        <p className="brand">TRIAROCK</p>
      </div>
    </Link>
  );
};

export default Logo;
