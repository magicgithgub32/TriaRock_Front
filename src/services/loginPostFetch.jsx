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
      if (data.user.email) {
      const userStored = {
        email: data.user.email,
        token: data.token
      };
      localStorage.setItem('userStored', JSON.stringify(userStored));
      navigate('/favorites')
    }
      data.message && setError(data.message)
    })
    .catch((error) => {
      console.error('error:', error.message);
      // setError(error.message);
    });
};
