import React from 'react';
import FavoriteRecipes from '../components/FavoriteRecipes';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import OptionsRecipes from '../components/OptionsRecipes';
import { useFavorites } from '../context/DetailContext';

function RecipesFavorites() {
  const { favorites } = useFavorites();
  return (
    <>
      <HeaderWithoutSearchButton title="Favorite Recipes" />
      <OptionsRecipes />
      { favorites && <FavoriteRecipes /> }
    </>
  );
}

export default RecipesFavorites;
