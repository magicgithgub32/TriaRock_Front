import React from 'react';
import './Title.css';

const Title = ({ textTitle, id }) => {
  return (
    <div className="title-container" id={id}>
      <h2 className="title" id={id}>
        {textTitle}
      </h2>
    </div>
  );
};

export default Title;
