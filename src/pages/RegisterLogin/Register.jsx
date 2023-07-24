import React, { useContext, useState, useEffect } from 'react';
import './RegisterLogin.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { registerPostFetch } from '../../services/registerPostFetch';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/ui/Message/Message';
import { loginPostFetch } from '../../services/loginPostFetch';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm({ defaultValues: { email: '', password: '' } });
  const onSubmit = (value) => {
    console.log(value);
  };

  const navigate = useNavigate();

  // const { setError, error, userRegistered, setUserRegistered, setUserLogged } =
  //   useContext(UserContext);

  const { error } = useContext(UserContext);

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   registerPostFetch(userRegistered, setError, navigate, setUserLogged);
  //   event.target.reset();
  // };

  // const handleInputChange = (event) => {
  //   setUserRegistered({
  //     ...userRegistered,
  //     [event.target.name]: event.target.value
  //   });
  // };

  return (
    <div>
      <Header />

      <div className="register-login-container">
        <p className="register-cta">Create your account and start saving your favorites!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="register-login-form">
          <Input type="email" placeholder="email address" id="email" register={register('email')} />

          <Input
            type="password"
            placeholder="password"
            id="password"
            register={register('password', {
              minLength: {
                value: 6,
                message:
                  'Password must be at least 6 characters long and contain both uppercase and lowercase letters.'
              }
            })}
          />
          <Button type="submit" buttonText="Submit" />
        </form>

        {error && <Message messageText={error} />}
      </div>

      <Footer />
    </div>
  );
};

export default Register;
