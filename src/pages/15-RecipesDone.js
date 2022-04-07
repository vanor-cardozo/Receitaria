import React from 'react';
// import OptionsRecipes from '../components/OptionsRecipes';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import DoneRecipes from '../components/DoneRecipes';

function RecipesDone() {
  return (
    <>
      <HeaderWithoutSearchButton title="Done Recipes" />
      {/* <OptionsRecipes /> */}
      <DoneRecipes />
    </>
  );
}

export default RecipesDone;
