export const registerPostFetch = (userRegistered, setError, navigate, userLogged, setUserLogged) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userRegistered)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        setError(data.message) 
        // setUserLogged({ email: '', password: '' })
      } else {
        const userStored = {
        email: data.createdUser.email  
      }
      localStorage.setItem('userStored', JSON.stringify(userStored));
      navigate('/')
    }
 
  
    })
    .catch((error) => {
      console.log('Error:', error);
      // setError(data.message);
    });
};
