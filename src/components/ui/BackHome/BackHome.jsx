import React from 'react';
import { Link } from 'react-router-dom';

const BackHome = () => {
  return (
    <div className="home-section">
      <Link to="/">
        <img src="./src/assets/home-2.svg" className="home-icon" />
      </Link>
    </div>
  );
};

export default BackHome;
