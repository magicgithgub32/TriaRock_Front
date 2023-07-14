export const loginPostFetch = (userLogged, setError, navigate, setUserLogged) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userLogged)
  })
    .then((response) => response.json())
    .then((data) => {
console.log('error de login', data.message)
      if (data.message) { 
      setError(data.message)
      setUserLogged({ email: '', password: '' });
      } else {  
      const userStored = {
        email: data.user.email,
        token: data.token
      };
      localStorage.setItem('userStored', JSON.stringify(userStored));
      navigate('/favorites')
    }
    })
    .catch((error) => {
      console.log('error:', error.message);
      //setError(error.message);
    });
};
