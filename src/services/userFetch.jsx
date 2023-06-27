import { useEffect, useContext } from 'react';
import { UserContext } from '../App'

export const userFetch = () => {
 
  const userContext = useContext(UserContext); 
  const { user, setUser } = UserContext; //aquí el que hace falta es el logged para la url del fetch

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${user.email}`);

      const data = await res.json();
      return data;
    };
    getData()
      .then((data) => setUser(data))
      .catch((error) => console.log('User not found', error));
  }, []);

  return user;
};
