export const favPutFetch = (userStored, bodyData, setUserFavs, userFavs) => {
    
    console.log('userStored', userStored)
    console.log('bodyData', bodyData)
    console.log('uerFavs', userFavs)
   

fetch(`${import.meta.env.VITE_API_URL}/users/${userStored.email}/fav`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userStored.token}`
    },
    body: JSON.stringify(bodyData)
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