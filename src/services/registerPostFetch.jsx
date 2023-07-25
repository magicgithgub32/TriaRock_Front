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
        // navigate('/'); //comentado porque no va a la home, sino a myfavs (el navigate del login)
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};

// export const registerPostFetch = (userRegistered, setUserLogged, navigate, setError) => {
//   fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userRegistered)
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.message) {
//          setError(data.message);
//         setUserLogged({ email: '', password: '' });
//       } else {
//         const userStored = {
//           email: data.createdUser.email,
//           password: data.createdUser.password //que llegue password
//         };
//         localStorage.setItem('userStored', JSON.stringify(userStored));
//  setUserLogged(userStored);
//     loginPostFetch(userStored, setError, navigate, setUserLogged);
//       }
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     setError(data.message);
//     });
// };
