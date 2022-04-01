import React, { useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function FavoriteButton() {
  const [favoriteOn, setFavoriteOn] = useState(false);

  return (
    <button
      data-testid="favorite-btn"
      type="button"
      onClick={ () => setFavoriteOn(!favoriteOn) }
    >
      {
        favoriteOn ? <img src={ blackHeart } alt="black heart icon" />
          : <img src={ whiteHeart } alt="white heart icon" />
      }
    </button>
  );
}
