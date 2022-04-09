import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDetailsFoods } from '../utils/fetchDetails';
import fetchRecomendationsDrinks from '../utils/fetchRecomendations';
import ShareButton from '../components/ShareButton';
import FavoriteButtonFoods from '../components/FavoriteButtonFoods';
import { useDetail, useShare, useTypeString } from '../context/DetailContext';
import isStartedFood from '../services/isStartedLocalStorage';
import { startRecipeFood } from '../utils/startRecipe';
import getIngredients from '../utils/ingredients';
import getMeasure from '../utils/measure';
import Ingredients from '../components/Ingredients';
import styleDetailFood from '../css/RecipeDetailsFoods';
import RecomendationDrink from '../components/RecomendationDrink';
// import RecipeButton from '../components/RecipeButton';

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

  let ingredients = [];
  let measure = [];

  // const req = async (arg) => {
  //   const videoURL = `https://www.youtube.com/oembed?url=${arg}&format=json`;
  //   const { html } = await (await fetch(videoURL)).json();
  //   setVideo(html);
  //   console.log(typeof video);
  // };

  if (foodDetail) {
    ingredients = getIngredients(foodDetail);
    measure = getMeasure(foodDetail);
    // req(foodDetail.strYoutube);
  }

  return (
    <>
      <main>
        {foodDetail && (
          <div>
            <img
              style={ { width: '200px' } }
              src={ foodDetail.strMealThumb }
              alt={ id }
              data-testid="recipe-photo"
            />
            <h2 data-testid="recipe-title">{foodDetail.strMeal}</h2>

            <ShareButton />
            <FavoriteButtonFoods />

            <p data-testid="recipe-category">{foodDetail.strCategory}</p>

            <Ingredients ingredients={ ingredients } measure={ measure } />

            <p data-testid="instructions">{foodDetail.strInstructions}</p>
            <iframe title="youtubeDetail" data-testid="video" />

            <RecomendationDrink recomendations={ recomendations } />

            <button
              type="button"
              data-testid="start-recipe-btn"
              style={ styleDetailFood }
              onClick={ () => {
                startRecipeFood(id, ingredients);
                history.push(`/foods/${id}/in-progress`);
              } }
            >
              {isStartedFood(id)
                ? 'Continue Recipe'
                : 'Start Recipe'}
            </button>
          </div>
        )}
      </main>
      {/* <>
        <h1>Tela principal de receitas de detalhes de comidas.</h1>
        <RecipeButton />
      </> */}
    </>
  );
}

export default RecipesDetailsFoods;
