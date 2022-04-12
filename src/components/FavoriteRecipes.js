import React, { useEffect } from 'react';
import ShareButtonFavorite from './ShareButtonFavorite';
import FavoriteRecipesButton from './FavoriteRecipesButton';
import { useFavorites, useFilter } from '../context/DetailContext';

function FavoriteRecipes() {
  const { favorites, setFavorites } = useFavorites();
  const { filterBy } = useFilter();

  useEffect(() => {
    const favoritesStore = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoritesStore);
  }, [setFavorites]);

  return (
    <>
      {
        favorites
          .filter((fav) => {
            if (filterBy === 'All') return true;
            return fav.type === filterBy;
          })
          .map((favorite, index) => (
            <div key={ favorite.id } className="box-container">
              <a href={ `./${favorite.type}s/${favorite.id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ favorite.image }
                  alt={ favorite.name }
                />
              </a>
              {
                favorite.type === 'food' ? (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    { `${favorite.nationality} - ${favorite.category}` }
                  </p>
                ) : (
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { favorite.alcoholicOrNot }
                  </p>
                )
              }
              <a href={ `./${favorite.type}s/${favorite.id}` }>
                <p data-testid={ `${index}-horizontal-name` }>
                  { favorite.name }
                </p>
              </a>
              <ShareButtonFavorite
                path={ `/${favorite.type}s/${favorite.id}` }
                index={ index }
              />
              <FavoriteRecipesButton
                setFavorites={ setFavorites }
                favorites={ favorites }
                index={ index }
              />
            </div>
          ))
      }
    </>
  );
}

export default FavoriteRecipes;
