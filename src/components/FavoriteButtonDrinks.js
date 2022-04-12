import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Favorite from '../images/Favorite.svg';
import FavoriteRed from '../images/FavoriteRed.svg';
import { localStorageFavorite } from '../services/localStorage';
import { useDetail } from '../context/DetailContext';

export default function FavoriteButtonDrinks() {
  const [favoriteOn, setFavoriteOn] = useState(false);
  const { drinkDetail: obj } = useDetail();
  const { id: idURL } = useParams();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (storage) {
      const isFavorite = storage
        .find(({ id, type }) => id === obj.idDrink && type === 'drink' && idURL === id);
      if (isFavorite) setFavoriteOn(true);
    }
  }, [obj.idDrink, idURL]);

  function handleClick() {
    setFavoriteOn((prevState) => !prevState);
    localStorageFavorite(obj, 'drink', favoriteOn);
  }

  return (
    <button
      data-testid="favorite-btn"
      type="button"
      onClick={ () => handleClick() }
      src={
        favoriteOn ? 'FavoriteRed'
          : 'Favorite'
      }
    >
      {
        favoriteOn ? <img src={ FavoriteRed } alt="black heart icon" />
          : <img src={ Favorite } alt="white heart icon" />
      }
    </button>
  );
}
