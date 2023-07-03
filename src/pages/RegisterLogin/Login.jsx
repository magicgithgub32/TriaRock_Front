import React, { useState, useContext, useEffect } from 'react';
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
  // const userValid = userFetch();       


  const handleFormSubmit = (event) => {
    event.preventDefault();

    // const passwordA = '$2b$10$4s.zwO10TNxczQZ2SD/kMeXtkjOZkbZH5BtnXAhkJFSFvDkGUTKCe'
    // const hashPassword = bcrypt.hash(passwordA, 10);
    // console.log('hashPassword', hashPassword)

    // if (userLogged?.email === userValid.email 
    //   // && userLogged.password === userValid.password
    //   ) {
    //   navigate('/favorites');
      
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
       
      data.token? navigate('/favorites') : 
      alert('Please check your email and password and try again');

        })
        .catch((error) => {
          console.error('error:', error);
        });

    event.target.reset();
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
