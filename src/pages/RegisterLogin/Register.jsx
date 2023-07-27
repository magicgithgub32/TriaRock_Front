import React, { useContext } from 'react';
import './RegisterLogin.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { registerPostFetch } from '../../services/registerPostFetch';

const Register = ({ error, setError }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: '', password: '' }
  });
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const onSubmit = (values) => {
    registerPostFetch(values, navigate, setError, setIsLoggedIn);
  };

  return (
    <div>
      <Header />

      <main className="register-login-container">
        <Title textTitle="register" id="register-login-title" />
        <p className="register-cta">Create your account and start saving your favorites!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="register-login-form">
          <Input type="email" placeholder="email address" id="email" register={register('email')} />
          <Input
            type="password"
            placeholder="password"
            id="password"
            register={register('password')}
          />
          <Button type="submit" buttonText="Submit" />
        </form>
        {error && <Message messageText={error} />}
      </main>

      <Footer id="footer-register-login" />
    </div>
  );
};

export default Register;
