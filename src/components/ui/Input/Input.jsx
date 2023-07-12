import React from 'react'
import './Input.css'

const Input = ( { type, placeholder, onChange, value } ) => {
  return (
    <>
             <input type={type} 
             className="input" 
          placeholder={placeholder}
          onChange={onChange}
         value={value}
         />
    </>
  )
}

export default Input