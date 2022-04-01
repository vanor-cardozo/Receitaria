import React from 'react';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

function FoodsInProgress() {
  // `${strIngredient[index]} - ${ strMeasure[index]}`

  return (
    <section>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{ strMeal }</h3>
      <ShareButton />
      <FavoriteButton />
      <p data-testid="recipe-category">
        { strCategory }
      </p>
      <div>
        <h3>local para os ingredients</h3>
      </div>
      <p data-testid="instructions">
        { strInstructions }
      </p>
      <button data-testid="finish-recipe-btn" type="button">
        Finish Recipe
      </button>
    </section>
  );
}

export default FoodsInProgress;
