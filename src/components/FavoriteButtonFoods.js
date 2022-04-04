import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import { localStorageFavorite } from '../services/localStorage';
import { useDetail } from '../context/DetailContext';

export default function FavoriteButton() {
  const [favoriteOn, setFavoriteOn] = useState(false);
  const { foodDetail: obj } = useDetail();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (storage) {
      const isFavorite = storage
        .find(({ id, type }) => id === obj.idMeal && type === 'food');
      if (isFavorite) setFavoriteOn(true);
    }
  }, [obj.idMeal]);

  function handleClick() {
    setFavoriteOn((prevState) => !prevState);
    localStorageFavorite(obj, 'food', favoriteOn);
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

FavoriteButton.propTypes = {
  obj: PropTypes.shape(),
  type: PropTypes.string,
}.isRequired;
