export const registerPostFetch = (userRegistered, setError, navigate) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userRegistered)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.message ? setError(true) : navigate('/');
    })
    .catch((error) => {
      console.log('Error:', error);
      setError(true);
      console.log(error);
    });
};
