export const favsGetFetch = (userLogged, setUserFavs) => {  
    fetch(`${import.meta.env.VITE_API_URL}/users/${userLogged?.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setUserFavs(data.favs);
      })
      .catch((error) => {
        console.log('Error', error);
      });
    }