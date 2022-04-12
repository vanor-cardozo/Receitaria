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
import { Container, HeaderImg, NameBanner,
  Card, RecomendationCard, RecomendationBanner } from '../css/RecipeDetailsDrinks';
import NavLeft from '../images/NavLeft.svg';
import NavRight from '../images/NavRight.svg';

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
          <Container>
            <HeaderImg>
              <img
                src={ drinkDetail.strDrinkThumb }
                alt={ id }
                data-testid="recipe-photo"
              />
            </HeaderImg>

            <NameBanner>
              <div>
                <h2 data-testid="recipe-title">{ drinkDetail.strDrink }</h2>
                <p data-testid="recipe-category">{ drinkDetail.strAlcoholic }</p>
              </div>
              <div>
                <ShareButton />
                <FavoriteButtonDrinks />
              </div>
            </NameBanner>

            <Card>
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
              <br />
              <p>Instructions</p>
              <p data-testid="instructions">{ drinkDetail.strInstructions }</p>
              <button
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
            </Card>

            <RecomendationBanner>
              <img
                src={ NavLeft }
                alt="previous"
              />
              <h2> Recommendation </h2>
              <img
                src={ NavRight }
                alt="next"
              />
            </RecomendationBanner>

            <RecomendationCard>
              <RecomendationFood recomendations={ recomendations } />
            </RecomendationCard>
          </Container>
        )
      }
    </main>
  );
}

export default RecipesDetailsDrinks;
