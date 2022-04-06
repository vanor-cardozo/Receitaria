import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDetail, useShare } from '../context/DetailContext';
import FavoriteButtonDrinks from '../components/FavoriteButtonDrinks';
import ShareButton from '../components/ShareButton';
import fetchDetailsDrinks from '../utils/fetchDetails';
import CheckIngredients from '../components/CheckIngredients';
import getIngredientsAndMeasure from '../utils/getIngredientsDrinks';

function DrinksInProgress() {
  const { drinkDetail, setDrinkDetail } = useDetail();
  const { id } = useParams();
  const history = useHistory();
  const [checked, setChecked] = useState({});
  const { setSharePath } = useShare();
  const { location: { pathname } } = useHistory();
  const pathnameDrinkDetail = pathname.split('/in-progress')[0];

  useEffect(() => {
    async function api() {
      setDrinkDetail(await fetchDetailsDrinks(id));
      setSharePath(pathnameDrinkDetail);
    }
    api();
  }, [id, setDrinkDetail, pathnameDrinkDetail, setSharePath]);

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem('checkDrink')) || {});
  }, []);

  const ingredients = [];
  const measure = [];
  const INGREDIENTS_NUMBER = 20;

  if (drinkDetail) {
    getIngredientsAndMeasure(drinkDetail, INGREDIENTS_NUMBER, ingredients, measure);
  }

  function Disabled() {
    // true ===  DESABILITADO
    // false === HABILITADO
    const checkedArrayLength = Object.values(checked).length;
    const checkedArray = Object.values(checked);

    if (checkedArrayLength < ingredients.length) {
      return true;
    }
    if (checkedArrayLength === ingredients.length) {
      return checkedArray.includes(false);
    }
  }

  return (
    <section>
      {
        drinkDetail && (
          <div>
            <img
              src={ drinkDetail.strDrinkThumb }
              alt="strMeal"
              data-testid="recipe-photo"
            />
            <h3 data-testid="recipe-title">
              { drinkDetail.strDrink }
            </h3>
            <ShareButton />
            <FavoriteButtonDrinks />
            <p data-testid="recipe-category">
              { drinkDetail.strAlcoholic }
            </p>
            <div>
              <h3>local para os ingredients</h3>
              <CheckIngredients
                setChecked={ setChecked }
                ingredients={ ingredients }
                measure={ measure }
                type="checkDrink"
              />
            </div>
            <p data-testid="instructions">
              { drinkDetail.strInstructions }
            </p>
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ Disabled() }
              onClick={ () => (history.push('/done-recipes')) }
            >
              Finish Recipe
            </button>
          </div>
        )
      }
    </section>
  );
}

export default DrinksInProgress;
