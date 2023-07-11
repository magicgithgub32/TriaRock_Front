import { useState, useEffect } from 'react';
import { userStored } from '../utils/localStorage'

export const userFavsFetch = (userLogged) => {
   
  const [userFavs, setUserFavs] = useState();

  useEffect(() => {
    if (!userStored) {
        setUserFavs([])
    } else {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${userStored.email}`);

      const data = await res.json();
      return data;
    };
    getData()
      .then((data) => {
        console.log('userfavs en el fetc', data.favs)
        setUserFavs(data.favs)
      })
      .catch((error) => console.log('User not found', error));
    }
  }, [userLogged]);

  return { userFavs, setUserFavs };
};
