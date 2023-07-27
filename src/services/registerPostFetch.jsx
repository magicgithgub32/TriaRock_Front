import { loginPostFetch } from './loginPostFetch';

export const registerPostFetch = (values, navigate, setError, setIsLoggedIn) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        setError(data.message);
      } else {
        setError('');
        const userStored = {
          email: data.createdUser.email,
          password: data.createdUser.password
        };
        localStorage.setItem('userStored', JSON.stringify(userStored));
        loginPostFetch(values, navigate, setError, setIsLoggedIn);
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};