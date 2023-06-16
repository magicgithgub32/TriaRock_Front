import { useState, useEffect } from 'react';

export const productFetch = () => {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const data = await res.json();
      return data;
    };
    getData()
      .then((data) => setAllProducts(data))
      .catch((error) => console.log('Data not found', error));
  }, []);

  return allProducts;
};
