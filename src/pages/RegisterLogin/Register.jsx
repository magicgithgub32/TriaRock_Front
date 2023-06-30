import React, { useState } from 'react';
import './Register.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Register = () => {
  const [userRegistered, setUserRegistered] = useState({
    email: '',
    password: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userRegistered)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    event.target.reset();
  };

  const handleInputChange = (event) => {
    setUserRegistered({
      ...userRegistered,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="register-login">
      <Header />
      <form onSubmit={handleFormSubmit}>
        <input
          className="register-email-input"
          type="text"
          placeholder="email address"
          name="email"
          value={userRegistered.email}
          onChange={handleInputChange}
        />
        <input
          className="register-password-input"
          type="password"
          placeholder="password"
          name="password"
          value={userRegistered.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <Footer />
    </div>
  );
};

export default Register;
