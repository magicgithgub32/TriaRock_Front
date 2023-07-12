import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, onChange, value, name }) => {
  return (
    <>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </>
  );
};

export default Input;
