import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDetailsFoods } from '../utils/fetchDetails';
import fetchRecomendationsDrinks from '../utils/fetchRecomendations';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import { useDetail, useShare, useTypeString } from '../context/DetailContext';
import isStartedFood from '../services/isStartedLocalStorage';
import { startRecipeFood } from '../utils/startRecipe';

function RecipesDetailsFoods() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const { foodDetail, setFoodDetail } = useDetail();
  const { setTypeString } = useTypeString();
  const { setSharePath } = useShare();
  const [recomendations, SetRecomendations] = useState([]);
  // const [video, setVideo] = useState();

  useEffect(() => {
    const api = async () => {
      setFoodDetail(await fetchDetailsFoods(id));
      setTypeString('food');
      setSharePath(pathname);
      SetRecomendations((await fetchRecomendationsDrinks()));
    };
    api();
  }, [id, setFoodDetail, setTypeString, setSharePath, pathname]);

  const ingredients = [];
  const measure = [];
  const INGREDIENTS_NUMBER = 20;

  const getIngredientsAndMeasure = () => {
    for (let i = 1; i < INGREDIENTS_NUMBER; i += 1) {
      if (foodDetail[`strIngredient${i}`] !== '') {
        ingredients.push(foodDetail[`strIngredient${i}`]);
      }
      if (foodDetail[`strMeasure${i}`] !== ' ') {
        measure.push(foodDetail[`strMeasure${i}`]);
      }
    }
  };

  // const req = async (arg) => {
  //   const videoURL = `https://www.youtube.com/oembed?url=${arg}&format=json`;
  //   const { html } = await (await fetch(videoURL)).json();
  //   setVideo(html);
  //   console.log(typeof video);
  // };

  if (foodDetail) {
    getIngredientsAndMeasure();
    // req(foodDetail.strYoutube);
  }

  return (
    <main>
      {
        foodDetail && (
          <div>
            <img
              style={ { width: '150px' } }
              src={ foodDetail.strMealThumb }
              alt={ id }
              data-testid="recipe-photo"
            />
            <h2 data-testid="recipe-title">{ foodDetail.strMeal }</h2>
            <ShareButton />
            <FavoriteButton />
            <p data-testid="recipe-category">{ foodDetail.strCategory }</p>
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
            <p data-testid="instructions">{ foodDetail.strInstructions }</p>
            <iframe title="youtubeDetail" data-testid="video" />
            <ul>
              {
                recomendations.map((rec, index) => (
                  <li
                    style={ { display: 'inline-block' } }
                    key={ rec.idDrink }
                    data-testid={ `${index}-recomendation-card` }
                  >
                    <span data-testid={ `${index}-recomendation-title` }>
                      { ` ${rec.strDrink} - ` }
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
              onClick={ () => {
                startRecipeFood(id, ingredients);
                history.push(`/foods/${id}/in-progress`);
              } }
            >
              {
                isStartedFood(id)
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

export default RecipesDetailsFoods;
