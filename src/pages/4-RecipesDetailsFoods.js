import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
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
import RecomendationDrink from '../components/RecomendationDrink';
import { Container, HeaderImg, NameBanner,
  Card, VideoCard, RecomendationCard } from '../css/RecipeDetailFoods';
import NavLeft from '../images/NavLeft.svg';
import NavRight from '../images/NavRight.svg';

function RecipesDetailsFoods() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const { foodDetail, setFoodDetail } = useDetail();
  const { setTypeString } = useTypeString();
  const { setSharePath } = useShare();
  const [recomendations, SetRecomendations] = useState([]);

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

  if (foodDetail) {
    ingredients = getIngredients(foodDetail);
    measure = getMeasure(foodDetail);
  }

  return (
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

          <p data-testid="instructions">{ foodDetail.strInstructions }</p>
          <ReactPlayer
            title="youtubeDetail"
            data-testid="video"
            url={ foodDetail.strYoutube }
            alt={ foodDetail.strMeal }
          />

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
      {
        foodDetail && (
          <Container>

            <HeaderImg>
              <img
                src={ foodDetail.strMealThumb }
                alt={ id }
                data-testid="recipe-photo"
              />
            </HeaderImg>

            <NameBanner>
              <div>
                <h2 data-testid="recipe-title">{ foodDetail.strMeal }</h2>
                <p data-testid="recipe-category">{ foodDetail.strCategory }</p>
              </div>
              <div>
                <ShareButton />
                <FavoriteButtonFoods />
              </div>
            </NameBanner>

            <Card>
              <Ingredients ingredients={ ingredients } measure={ measure } />
              <br />
              <p>Instructions</p>
              <p data-testid="instructions">{ foodDetail.strInstructions }</p>
              <button
                type="button"
                data-testid="start-recipe-btn"
                onClick={ () => {
                  startRecipeFood(id, ingredients);
                  history.push(`/foods/${id}/in-progress`);
                } }
              >
                {
                  isStartedFood(id)
                    ? 'CONTINUE RECIPE'
                    : 'START RECIPE'
                }
              </button>
            </Card>

            <VideoCard>
              <ReactPlayer
                width="360px"
                height="200px"
                title="youtubeDetail"
                data-testid="video"
                url={ foodDetail.strYoutube }
                alt={ foodDetail.strMeal }
              />
              <RecomendationCard>
                <img
                  src={ NavLeft }
                  alt="previous"
                />
                <h2> Recommendation </h2>
                <img
                  src={ NavRight }
                  alt="next"
                />
              </RecomendationCard>
              <RecomendationDrink recomendations={ recomendations } />
            </VideoCard>
          </Container>
        )
      }
    </main>
  );
}

export default RecipesDetailsFoods;
