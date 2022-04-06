import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDetailsFoods } from '../utils/fetchDetails';
import { useShare, useDetail } from '../context/DetailContext';
import FavoriteButtonFoods from '../components/FavoriteButtonFoods';
import ShareButton from '../components/ShareButton';
import getIngredients from '../utils/ingredients';
import getMeasure from '../utils/measure';
import CheckIngredients from '../components/CheckIngredients';

function FoodsInProgress() {
  const { foodDetail, setFoodDetail } = useDetail();
  const { id } = useParams();
  const { setSharePath } = useShare();
  const { location: { pathname } } = useHistory();
  const pathnameFoodDetail = pathname.split('/in-progress')[0];
  const [checked, setChecked] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function api() {
      setFoodDetail(await fetchDetailsFoods(id));
      setSharePath(pathnameFoodDetail);
    }
    api();
  }, [id, setFoodDetail, setSharePath, pathnameFoodDetail]);

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem('checkFood')) || {});
  }, []);

  // useEffect(() => {
  //   const getChecked = JSON.parse(localStorage.getItem('check'));
  //   const newOBJ = { ...getChecked, ...checked };
  //   localStorage.setItem('check', JSON.stringify(newOBJ));
  // }, [checked]);

  let ingredients = [];
  let measure = [];
  if (foodDetail) {
    ingredients = getIngredients(foodDetail);
    measure = getMeasure(foodDetail);
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

  function finishRecipe() {
    const doneOBJ = {
      id: foodDetail.idMeal,
      type: 'food',
      nationality: foodDetail.strArea,
      category: foodDetail.strCategory,
      alcoholicOrNot: '',
      name: foodDetail.strMeal,
      image: foodDetail.strMealThumb,
      doneDate: new Date(),
      tags: foodDetail.strTags.split(', '),
    };
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    doneRecipes.push(doneOBJ);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
  }

  return (
    <section>
      {
        foodDetail && (
          <div>
            <img
              src={ foodDetail.strMealThumb }
              style={ { width: '150px' } }
              alt="strMeal"
              data-testid="recipe-photo"
            />
            <h3 data-testid="recipe-title">
              { foodDetail.strMeal }
            </h3>
            <ShareButton />
            <FavoriteButtonFoods />
            <p data-testid="recipe-category">
              { foodDetail.strCategory }
            </p>
            <div>
              <h3>local para os ingredients</h3>
              <CheckIngredients
                setChecked={ setChecked }
                ingredients={ ingredients }
                measure={ measure }
                type="checkFood"
              />
            </div>
            <p data-testid="instructions">
              { foodDetail.strInstructions }
            </p>
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ Disabled() }
              onClick={ () => finishRecipe() }
            >
              Finish Recipe
            </button>
          </div>
        )
      }
    </section>
  );
}

export default FoodsInProgress;
