import { loginPostFetch } from "./loginPostFetch";

export const registerPostFetch = (userRegistered, setError, navigate, setUserLogged) => {
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
        setUserLogged({ email: '', password: '' })
      } else {
        const userStored = {
        email: data.createdUser.email,
password: data.createdUser.password //que llegue password
      }
      localStorage.setItem('userStored', JSON.stringify(userStored));
      setUserLogged(userStored)
      loginPostFetch(userStored, setError, navigate, setUserLogged)
    
    }
 
  
    })
    .catch((error) => {
      console.log('Error:', error);
      // setError(data.message);
    });
};
