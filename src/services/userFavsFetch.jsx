import { useState, useEffect } from 'react';

export const userFavsFetch = (userLogged) => {
  const [userFavs, setUserFavs] = useState([]);

  useEffect(() => {
    if (userLogged.email === '') {
      setUserFavs([]);
    } else {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged.email}`);

      const data = await res.json();
      return data;
    };
    getData()
      .then((data) => setUserFavs(data.favs))
      .catch((error) => console.log('User not found', error));
    }
  }, []);

  return { userFavs, setUserFavs };
};
