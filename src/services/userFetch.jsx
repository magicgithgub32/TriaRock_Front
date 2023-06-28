import { useEffect, useContext } from 'react';
import { UserContext } from '../App';

export const userFetch = () => {
  const userContext = useContext(UserContext);
  const { userLogged, userValidEmail, setUserValidEmail } = userContext;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged?.email}`);

      const data = await res.json();
      return data;
    };
    getData().then((data) => console.log(data));
    // .then((data) => setUserValidEmail(data))
    // .catch((error) => console.log('User not found', error));
  }, [userLogged]);

  return userValidEmail;
};
