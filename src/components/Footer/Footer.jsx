import './Footer.css';
import React from 'react';

const Footer = ({id}) => {
  return (
    <footer id={id}>
      <p className="footer">
    Created by {' '}
      <a href="https://www.linkedin.com/in/beatrizrodriguezmaya/"
          target="blank"
          rel="noopener noreferrer"
        >
          Beatriz Rodríguez
        </a> 
    {' & '}
          <a href="https://www.linkedin.com/in/rubenpiqueras/" 
        target="blank" rel="noopener noreferrer">
          Rubén Piqueras
        </a>{' - 2023'}
     
        </p>    
    </footer>
  );
};

export default Footer;
