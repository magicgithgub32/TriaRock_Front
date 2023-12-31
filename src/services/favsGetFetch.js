export const favsGetFetch = (setUserFavs) => {
  const userStored = JSON.parse(localStorage.getItem('userStored'));

  fetch(`${import.meta.env.VITE_API_URL}/users/${userStored?.email}`, {
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
};
