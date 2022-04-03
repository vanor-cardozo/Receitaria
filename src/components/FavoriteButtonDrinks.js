import React, { useEffect, useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import { localStorageFavorite } from '../services/localStorage';
import { useDetail, useTypeString } from '../context/DetailContext';

export default function FavoriteButtonDrinks() {
  const [favoriteOn, setFavoriteOn] = useState(false);
  const { drinkDetail: obj } = useDetail();
  const { typeString } = useTypeString();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (storage) {
      const isFavorite = storage
        .find(({ id, type }) => id === obj.idDrink && type === typeString);
      if (isFavorite) setFavoriteOn(true);
    }
  }, [obj.idDrink, typeString]);

  function handleClick() {
    setFavoriteOn((prevState) => !prevState);
    localStorageFavorite(obj, typeString, favoriteOn);
  }

  return (
    <button
      data-testid="favorite-btn"
      type="button"
      onClick={ () => handleClick() }
      src={
        favoriteOn ? 'blackHeartIcon'
          : 'whiteHeartIcon'
      }
    >
      {
        favoriteOn ? <img src={ blackHeart } alt="black heart icon" />
          : <img src={ whiteHeart } alt="white heart icon" />
      }
    </button>
  );
}
