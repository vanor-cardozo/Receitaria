import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function FavoriteButton() {
  const [favoriteOn, setFavoriteOn] = useState(false);
  // const { id } = useParams();
  // const favorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  // const isFavorite = favorite.some((recipe) => recipe.id === id);
  // if (isFavorite) setFavoriteOn(true);

  return (
    <button
      data-testid="favorite-btn"
      type="button"
      onClick={ () => setFavoriteOn(!favoriteOn) }
      src={
        !favoriteOn ? 'whiteHeartIcon'
          : 'blackHeartIcon'
      }
    >
      {
        !favoriteOn ? <img src={ whiteHeart } alt="white heart icon" />
          : <img src={ blackHeart } alt="black heart icon" />
      }
    </button>
  );
}
