export const loginPostFetch = (values, navigate, setError, setIsLoggedIn) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
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
          email: data.user.email,
          token: data.token
        };
        localStorage.setItem('userStored', JSON.stringify(userStored));

        navigate('/favorites');

        setIsLoggedIn(true);
      }
    })
    .catch((error) => {
      console.log('error:', error.message);
    });
};