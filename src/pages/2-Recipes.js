import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchFoods from '../utils/fetchFoods';

function Recipes() {
  const { setFoodsApi, foodsApi, API } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    if (API) {
      const api = async () => {
        const result = await fetchFoods(API);
        setFoodsApi(result);
      };
      api();
    }
  }, [API, setFoodsApi]);

  if (foodsApi && foodsApi.meals.length === 1) {
    const id = foodsApi.meals[0].idMeal;
    history.push(`/foods/${id}`);
  }

  const MAX_MEALS = 12;
  const meals = foodsApi && foodsApi.meals.filter((_, i) => i < MAX_MEALS);

  return (
    <>
      <Header title="Foods" />
      <h1>Tela principal de receitas de comidas.</h1>
      {
        foodsApi && foodsApi.meals.length > 1
          ? meals.map((food, index) => (
            <div key={ food.idMeal } data-testid={ `${index}-recipe-card` }>
              <h4 data-testid={ `${index}-card-name` }>{ food.strMeal }</h4>
              <img
                src={ food.strMealThumb }
                alt={ food.strMeal }
                width="20%"
                data-testid={ `${index}-card-img` }
              />
            </div>))
          : ''
      }
    </>
  );
}

export default Recipes;
