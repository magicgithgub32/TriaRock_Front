import React, { useState, useContext } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { UserContext } from '../../App';
import { userFetch } from '../../services/userFetch';

const Login = () => {
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;
  const { userLogged, setUserLogged } = userContext;
  const userValidEmail = userFetch();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (userLogged.email === userValidEmail) {
      navigate('/favorites');
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
        })
        .catch((error) => {
          console.error('error:', error);
        });

      event.target.reset();
    } else {
      alert('This email is not registered yet. Please try again');
    }
  };

  const handleInputChange = (event) => {
    setUserLogged({
      ...userLogged,
      [event.target.name]: event.target.value
    });
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
