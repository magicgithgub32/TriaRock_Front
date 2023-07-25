import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, id, register }) => {
  return (
    <>
      <input {...register} type={type} className="input" placeholder={placeholder} id={id} />
    </>
  );
};

export default Input;
