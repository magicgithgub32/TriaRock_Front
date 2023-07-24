import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, onChange, id, register }) => {
  return (
    <>
      <input
        {...register}
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    </>
  );
};

export default Input;
