import React, { useContext, useState, useEffect } from 'react';
import './Register.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { registerPostFetch } from '../../services/registerPostFetch';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/ui/Message/Message';
import { loginPostFetch } from '../../services/loginPostFetch';


const Register = () => {
  const navigate = useNavigate();

  const [userRegistered, setUserRegistered] = useState({
    email: '',
    password: ''
  });

  const { setError, error, userLogged, setUserLogged } = useContext(UserContext);


  const handleFormSubmit = (event) => {
    event.preventDefault()
    registerPostFetch(userRegistered, setError, navigate, setUserLogged);
    event.target.reset()
   }
     

  const handleInputChange = (event) => {
    setUserRegistered({
      ...userRegistered,
      [event.target.name]: event.target.value
    });
  };
  
  //falta saber cómo hacer el loginPostFetch una vez que ya se tiene el usuario registrado
  useEffect(() => {
    loginPostFetch(userLogged, setError, navigate, setUserLogged)
    setError('')
    },[userRegistered])

  return (
    <div className="register-login">
      <Header />
      <form onSubmit={handleFormSubmit}>
        <input
          className="register-email-input"
          type="email"
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

      {error && <Message messageText={error} />}

      <Footer />
    </div>
  );
};

export default Register;
