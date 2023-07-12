export const loginPostFetch = (userLogged, setError, navigate) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userLogged)
  })
    .then((response) => response.json())
    .then((data) => {
      const userStored = {
        email: data.user.email,
        token: data.token
      };
      localStorage.setItem('userStored', JSON.stringify(userStored));
      navigate('/favorites');
    })
    .catch((error) => {
      console.error('error:', error.message);
      // alert('Please check your email and password and try again');
      setError(true);
    });
};
