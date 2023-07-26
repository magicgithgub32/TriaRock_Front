import React, { useContext } from 'react';
import './RegisterLogin.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { registerPostFetch } from '../../services/registerPostFetch';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/ui/Message/Message';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Title from '../../components/ui/Title/Title';

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
      <Title textTitle="register" id="register-login-title"/> 
        <p className="register-cta">Create your account and start saving your favorites!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="register-login-form">
          <Input type="email" placeholder="email address" id="email" register={register('email')} />
          <Input
            type="password"
            placeholder="password"
            id="password"
            register={register('password')}
            // {  validate: passwordValidation}
          />
          <Button type="submit" buttonText="Submit" />
        </form>
        {error && <Message messageText={error} />}
        {/* {formState.errors.password && <Message messageText={formState.errors.password.message} />} */}
      </main>

      <Footer id="footer-register-login" />
    </div>
  );
};

export default Register;
