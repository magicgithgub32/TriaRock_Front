import React, { useContext } from 'react'
import './Heart.css'
import { ProductContext, UserContext } from '../../../App';
import { favPutFetch } from '../../../services/favPutFetch';

const Heart = ({product}) => {
  const { userFavs, setUserFavs } = useContext(ProductContext);
    const { userLogged } = useContext(UserContext);

    const handleHeart = (product) => {
  
      if (userLogged.email === "") {
        alert(
          'Please log in to your account or create a new one so you can see and save your favorite products'
        );
      } else {
        const bodyData = { fav: product._id }
        favPutFetch(userLogged, bodyData, setUserFavs, userFavs);
      }
    };
    
  return (
    <div className="hearts-container">
    <img
      src={
       
        typeof userFavs[0] === 'string'
          ? userFavs?.includes(product._id)
            ? '../../src/assets/red-heart.png'
            : '../../src/assets/yellow-heart.svg'
          : userFavs?.some((favProduct) => favProduct._id === product._id)
          ? '../../src/assets/red-heart.png'
          : '../../src/assets/yellow-heart.svg'
          
      }
      className="heart"
      alt="heart"
      onClick={() => handleHeart(product)}
    />
  </div>
  )
}

export default Heart