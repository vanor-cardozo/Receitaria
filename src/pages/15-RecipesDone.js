import React from 'react';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import DoneRecipes from '../components/DoneRecipes';

function RecipesDone() {
  return (
    <>
      <HeaderWithoutSearchButton title="Done Recipes" />
      <DoneRecipes />
    </>
  );
}

export default RecipesDone;
