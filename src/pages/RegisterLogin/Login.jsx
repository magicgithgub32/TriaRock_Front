import React, { useContext, useEffect } from 'react';
import './RegisterLogin.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Message from '../../components/ui/Message/Message';
import Input from '../../components/ui/Input/Input';
import { loginPostFetch } from '../../services/loginPostFetch';
import Button from '../../components/ui/Button/Button';

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
    <div>
    <Header />
    <main className="register-login-container">
     
      <form onSubmit={handleFormSubmit} className="register-login-form">
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
        <Button buttonText="Submit"/>
      </form>

      {error && <Message messageText={error} />}
         
      <div className="register-container">
      <Link to="/register">
        <p className="register-cta" onClick={() => setError('')}>Create your account if you don't have one yet.</p>
      </Link>
      <Button buttonText="Register" className="register-button"/>
      </div>
      
   

      
    </main>
    <Footer />
    </div>
  );
};

export default Login;
