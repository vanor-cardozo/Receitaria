import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchRecomendationsFoods } from '../utils/fetchRecomendations';
import ShareButton from '../components/ShareButton';
import fetchDetailsDrinks from '../utils/fetchDetails';
import { useDetail, useShare, useTypeString } from '../context/DetailContext';
import FavoriteButtonDrinks from '../components/FavoriteButtonDrinks';
import { isStartedDrink } from '../services/isStartedLocalStorage';
import startRecipeDrink from '../utils/startRecipe';
import RecomendationFood from '../components/RecomendationFood';

function RecipesDetailsDrinks() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const { drinkDetail, setDrinkDetail } = useDetail();
  const { setTypeString } = useTypeString();
  const { setSharePath } = useShare();
  const [recomendations, SetRecomendations] = useState([]);

  useEffect(() => {
    const api = async () => {
      setDrinkDetail(await fetchDetailsDrinks(id));
      setTypeString('drink');
      setSharePath(pathname);
      SetRecomendations(await fetchRecomendationsFoods());
    };
    api();
  }, [id, pathname, setDrinkDetail, setSharePath, setTypeString]);

  const ingredients = [];
  const measure = [];
  const INGREDIENTS_NUMBER = 20;

  const getIngredientsAndMeasure = () => {
    for (let i = 1; i < INGREDIENTS_NUMBER; i += 1) {
      if (drinkDetail[`strIngredient${i}`] != null) {
        ingredients.push(drinkDetail[`strIngredient${i}`]);
      }
      if (drinkDetail[`strMeasure${i}`] != null) {
        measure.push(drinkDetail[`strMeasure${i}`]);
      }
      if (drinkDetail[`strIngredient${i}`] != null
      && drinkDetail[`strMeasure${i}`] == null) {
        measure.push('');
      }
    }
  };

  if (drinkDetail) {
    getIngredientsAndMeasure();
  }

  return (
    <main>
      {
        drinkDetail && (
          <div>
            <img
              style={ { width: '200px' } }
              src={ drinkDetail.strDrinkThumb }
              alt={ id }
              data-testid="recipe-photo"
            />
            <h2 data-testid="recipe-title">{ drinkDetail.strDrink }</h2>
            <ShareButton />
            <FavoriteButtonDrinks />
            <p data-testid="recipe-category">{ drinkDetail.strAlcoholic }</p>
            <ul>
              {
                ingredients.map((ingredient, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {`${ingredient} - ${measure[index]}`}
                  </li>
                ))
              }
            </ul>
            <p data-testid="instructions">{ drinkDetail.strInstructions }</p>
            <RecomendationFood recomendations={ recomendations } />
            <button
              style={ {
                alignItems: 'end',
                bottom: '0',
                display: 'flex',
                position: 'fixed',
              } }
              type="button"
              data-testid="start-recipe-btn"
              onClick={ () => {
                startRecipeDrink(id, ingredients);
                history.push(`/drinks/${id}/in-progress`);
              } }
            >
              {
                isStartedDrink(id)
                  ? 'Continue Recipe'
                  : 'Start Recipe'
              }
            </button>
          </div>
        )
      }
    </main>
  );
}

export default RecipesDetailsDrinks;
