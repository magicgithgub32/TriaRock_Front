import React, { useEffect, useContext } from 'react';
import './RegisterLogin.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { loginPostFetch } from '../../services/loginPostFetch';
import { getCurrentPath } from '../../utils/currentPath';

const Login = ({ error, setError }) => {
  const { currentPath } = getCurrentPath(useLocation);
  const { register, handleSubmit } = useForm({ defaultValues: { email: '', password: '' } });
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const onSubmit = (values) => {
    loginPostFetch(values, navigate, setError, setIsLoggedIn);
  };

  useEffect(() => {
    setError('');
  }, [currentPath]);

  return (
    <>
      <Header />
      <main className="register-login-container">
        <Title textTitle="log in" id="register-login-title" />
        <form onSubmit={handleSubmit(onSubmit)} className="register-login-form">
          <Input register={register('email')} type="email" placeholder="email address" id="email" />
          <Input
            register={register('password')}
            type="password"
            placeholder="password"
            id="password"
          />
          <Button type="submit" buttonText="Submit" />
        </form>

        {error && <Message messageText={error} />}

        <div className="register-container">
          <p className="register-cta" onClick={() => setError('')}>
            Create your account if you don't have one yet.
          </p>
          <Link to="/register">
            <Button buttonText="Register" className="white-button" />
          </Link>
        </div>
      </main>
      <Footer id="footer-register-login" />
    </>
  );
};

export default Login;
