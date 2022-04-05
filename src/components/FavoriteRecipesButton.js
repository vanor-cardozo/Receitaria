import React from 'react';
import PropTypes from 'prop-types';
import blackHeart from '../images/blackHeartIcon.svg';
// import { localStorageFavorite } from '../services/localStorage';

export default function FavoriteRecipesButton({ index, setFavorites, favorites }) {
  function removeFavorites() {
    const favoritesArray = favorites;
    const removeFavoriteId = favoritesArray.filter((favorite) => (
      favorite.id !== favoritesArray[index].id
    ));
    setFavorites(removeFavoriteId);
    localStorage.setItem('favoriteRecipes', JSON.stringify(removeFavoriteId));
  }

  return (
    <button
      data-testid={ `${index}-horizontal-favorite-btn` }
      type="button"
      onClick={ () => removeFavorites() }
      src="blackHeartIcon"
    >
      <img src={ blackHeart } alt="black heart icon" />
    </button>
  );
}

FavoriteRecipesButton.propTypes = {
  index: PropTypes.string,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
}.isRequired;
