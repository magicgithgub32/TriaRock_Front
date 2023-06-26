import { useState, useEffect } from 'react';

export const productFetch = () => {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);

      const data = await res.json();
      return data;
    };
    getData()
      .then((data) => setAllProducts(data))
      .catch((error) => console.log('Data not found', error));
  }, []);

  return allProducts;
};
