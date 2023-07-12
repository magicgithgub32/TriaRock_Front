import React, { useState, useContext } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Message from '../../components/ui/Message/Message';
import Input from '../../components/ui/Input/Input';
import { loginPostFetch } from '../../services/loginPostFetch';

const Login = () => {
  const navigate = useNavigate();

  const { userLogged, setUserLogged, setError, error } = useContext(UserContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginPostFetch(userLogged, setError, navigate);

    event.target.reset();
  };

  const handleInputChange = (event) => {
    setUserLogged({
      ...userLogged,
      [event.target.name]: event.target.value
    });
  };

  console.log('userLogged', userLogged);

  return (
    <div className="register-login">
      <Header />
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="email address"
          name="email"
          value={userLogged?.email}
          onChange={handleInputChange}
        />

        <Input
          type="password"
          placeholder="password"
          name="password"
          value={userLogged?.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <Link to="/register">
        <p onClick={() => setError(false)}>Create your account if you don't have one yet</p>
      </Link>

      {error && <Message messageText="Please, check your email and password and try again" />}

      <Footer />
    </div>
  );
};

export default Login;
