import { useState, useEffect } from 'react';

export const userFavsFetch = (userStored) => {
  const [userFavs, setUserFavs] = useState([]);

  useEffect(() => {
    if (!userStored) {
      setUserFavs([]);
    } else {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${userStored.email}`);

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
