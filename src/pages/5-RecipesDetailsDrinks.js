import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchRecomendationsFoods } from '../utils/fetchRecomendations';
import ShareButton from '../components/ShareButton';
import fetchDetailsDrinks from '../utils/fetchDetails';
import FavoriteButton from '../components/FavoriteButton';

function RecipesDetailsDrinks() {
  const { id } = useParams();
  const history = useHistory();
  const [drinkDetail, setDrinkDetail] = useState();
  const [recomendations, SetRecomendations] = useState([]);
  // const [video, setVideo] = useState();

  useEffect(() => {
    const api = async () => {
      setDrinkDetail(await fetchDetailsDrinks(id));
      SetRecomendations(await fetchRecomendationsFoods());
    };
    api();
  }, [id]);

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
    // req(foodDetail.strYoutube);
  }

  return (
    <main>
      {
        drinkDetail && (
          <div>
            <img
              src={ drinkDetail.strDrinkThumb }
              alt={ id }
              data-testid="recipe-photo"
            />
            <h2 data-testid="recipe-title">{ drinkDetail.strDrink }</h2>
            <ShareButton path={ history.location.pathname } />
            <FavoriteButton obj={ drinkDetail } typeString="drink" />
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
            <iframe title="youtubeDetail" data-testid="video" />
            <ul>
              {
                recomendations.map((rec, index) => (
                  <li
                    style={ { display: 'inline-block' } }
                    key={ rec.idMeal }
                    data-testid={ `${index}-recomendation-card` }
                  >
                    <span data-testid={ `${index}-recomendation-title` }>
                      { ` ${rec.strMeal} - ` }
                    </span>
                  </li>
                ))
              }
            </ul>
            <button
              style={ {
                alignItems: 'end',
                bottom: '0',
                display: 'flex',
                position: 'fixed',
              } }
              type="button"
              data-testid="start-recipe-btn"
              onClick={ () => history.push(`/drinks/${id}/in-progress`) }
            >
              Start Recipe
            </button>
          </div>
        )
      }
    </main>
  );
}

export default RecipesDetailsDrinks;
