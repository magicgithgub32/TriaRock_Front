import React from 'react';
import './Filter.css';

const Filter = ({ inputTitle, inputOptions }) => {
  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label">
        {inputTitle}
      </label>
      {inputOptions.map((option, index) => (
        <div className="filter-options" key={index}>
          <input type="checkbox" id={option} name={inputTitle} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
