import React, { useContext, useState } from 'react';
import './Register.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { registerPostFetch } from '../../services/registerPostFetch';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/ui/Message/Message';

const Register = () => {
  const navigate = useNavigate();

  const [userRegistered, setUserRegistered] = useState({
    email: '',
    password: ''
  });

  const { setError, error } = useContext(UserContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    registerPostFetch(userRegistered, setError, navigate);
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

      {error ? (
        <Message messageText="Passwords should be at least six characters long and contain both uppercase and lowercase letter" />
      ) : (
        <></>
      )}

      <Footer />
    </div>
  );
};

export default Register;
