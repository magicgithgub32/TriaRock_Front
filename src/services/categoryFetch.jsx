import { useState, useEffect } from 'react';

export const categoryFetch = () => {

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http:localhost:3000/api/categories/');
      //(`${API_URL}?api_key=${API_KEY}`)
      const data = await res.json();
      console.log(data)
    };

    getData()
      .then((data) => setCategoriesData(data))
      .catch((error) => console.log('Data not found', error));
  }, []);
  return categoriesData;
 
};
