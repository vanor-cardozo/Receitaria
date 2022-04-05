import React, {/*  useContext  */} from 'react';
import ShareButton from './ShareButton';
import FavoriteButtonDoneRecipe from './FavoriteRecipesButton';
import '../css/DoneRecipes.css';

function DoneRecipes() {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favorites);

  return (
    <div className="box-container">
      <img
        data-testid="0-horizontal-image"
        src={ favorites[0].image }
        alt={ favorites[0].name }
      />
      <p
        // data-testid="${index}-horizontal-top-text"
        data-testid="0-horizontal-top-text"
      >
        { favorites[0].category }
      </p>
      <p
        // data-testid="${index}-horizontal-name"
        data-testid="0-horizontal-name"
      >
        { favorites[0].name }
      </p>
      <p
        // data-testid="${index}-horizontal-name"
        data-testid="0-horizontal-top-text"
      >
        { favorites[0].nationality }
      </p>
      <ShareButton index="0" />
      <FavoriteButtonDoneRecipe index="0" />
    </div>
  );
}

export default DoneRecipes;
