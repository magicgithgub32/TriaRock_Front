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
      if (data.email) {
        const userStored = {
        email: data.createdUser.email  
      }
      localStorage.setItem('userStored', JSON.stringify(userStored));
    }
   
      data.message ? setError(data.message) : navigate('/');
    })
    .catch((error) => {
      console.log('Error:', error);
      // setError(data.message);
    });
};
