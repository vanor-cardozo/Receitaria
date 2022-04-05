import React from 'react';
import FavoriteRecipes from '../components/FavoriteRecipes';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import OptionsRecipes from '../components/OptionsRecipes';

function RecipesFavorites() {
  return (
    <>
      <HeaderWithoutSearchButton title="Favorite Recipes" />
      <OptionsRecipes />
      <FavoriteRecipes />
    </>
  );
}

export default RecipesFavorites;
