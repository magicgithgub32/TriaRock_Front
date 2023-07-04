import React, { useContext, useState } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { UserContext } from '../../App';

const Login = () => {
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const { userLogged, setUserLogged, setToken } = userContext;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogged)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data.token);
        navigate('/favorites');
      })
      .catch((error) => {
        console.error('error:', error.message);
        alert('Please check your email and password and try again');
      });

    event.target.reset();
  };

  const handleInputChange = (event) => {
    setUserLogged({
      ...userLogged,
      [event.target.name]: event.target.value
    });
    console.log(userLogged);
  };
  return (
    <div className="register-login">
      <Header />
      <form onSubmit={handleFormSubmit}>
        <input
          className="login-email-input"
          type="text"
          placeholder="email address"
          name="email"
          value={userLogged?.email}
          onChange={handleInputChange}
        />
        <input
          className="login-password-input"
          type="password"
          placeholder="password"
          name="password"
          value={userLogged?.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <Link to="/register">
        <p>Create your account if you don't have one yet</p>
      </Link>

      <Footer />
    </div>
  );
};

export default Login;
