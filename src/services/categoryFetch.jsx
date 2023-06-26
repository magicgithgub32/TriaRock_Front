import { useState, useEffect } from 'react';

export const categoryFetch = () => {
  const [categoriesData, setCategoriesData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`);

      const data = await res.json();
      return data;
    };
    getData()
      .then((data) => setCategoriesData(data))
      .catch((error) => console.log('Data not found', error));
  }, []);

  return categoriesData;
};
