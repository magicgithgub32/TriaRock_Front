import React, { useState, useContext, useEffect } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Message from '../../components/ui/Message/Message';
import Input from '../../components/ui/Input/Input';
import { loginPostFetch } from '../../services/loginPostFetch';
import { userFavsFetch } from '../../services/userFavsFetch';

const Login = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const { userLogged, setUserLogged, setError, error } = useContext(UserContext);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginPostFetch(userLogged, setError, navigate, setUserLogged);
    event.target.reset();
  };

  const handleInputChange = (event) => {
    setUserLogged({
      ...userLogged,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
  setError('')
  }, [currentPath])

  return (
    <div className="register-login">
      <Header />
      <form onSubmit={handleFormSubmit}>
        <Input
          type="email"
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
        <p onClick={() => setError('')}>Create your account if you don't have one yet</p>
      </Link>

      {error && <Message messageText={error} />}

      <Footer />
    </div>
  );
};

export default Login;
