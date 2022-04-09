import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FiltersRecipe from '../components/FiltersRecipe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchFoods from '../utils/fetchFoods';
import fetchFoodsDefault from '../utils/fetchFoodsDefault';
import { useFetchIngredient } from '../context/DetailContext';
import fetchByIngredientAPI from '../utils/fetchByIngredientAPI';

function Recipes() {
  const {
    setFoodsApi, foodsApi, API, redirect, setRedirect } = useContext(RecipesContext);
  const history = useHistory();

  const { fetchByIngredient, setFetchByIngredient } = useFetchIngredient();

  useEffect(() => {
    if (API) {
      const api = async () => {
        const result = await fetchFoods(API);
        setFoodsApi(result);
      };
      api();
    }
  }, [API, setFoodsApi]);

  useEffect(() => {
    const { fetch, ingredient } = fetchByIngredient;
    let api;
    if (fetch) {
      api = async () => {
        const result = await fetchByIngredientAPI(ingredient, 'food');
        setFoodsApi(result);
      };
    } else {
      api = async () => {
        const result = await fetchFoodsDefault();
        setFoodsApi(result);
      };
    }
    api();
  }, [setFoodsApi, fetchByIngredient, setFetchByIngredient]);

  useEffect(() => () => setFetchByIngredient({ fetch: false, ingredient: '' }),
    [setFetchByIngredient]); // COMPONENT UNMOUNT

  const teste = 2;
  useEffect(() => {
    console.log(teste);
  }, [teste]);

  if (foodsApi && foodsApi.meals.length === 1 && redirect) {
    const id = foodsApi.meals[0].idMeal;
    history.push(`/foods/${id}`);
    setRedirect(false);
  }

  const MAX_MEALS = 12;
  const meals = foodsApi && foodsApi.meals.filter((_, i) => i < MAX_MEALS);

  return (
    <>
      <Header title="Foods" />
      <h1>Tela principal de receitas de comidas.</h1>
      <FiltersRecipe categoryType="foods" />
      {
        foodsApi && meals.map((food, index) => (
          <Link
            key={ food.idMeal }
            data-testid={ `${index}-recipe-card` }
            to={ `/foods/${foodsApi.meals[index].idMeal}` }
          >
            <div>
              <h4 data-testid={ `${index}-card-name` }>{ food.strMeal }</h4>
              <img
                src={ food.strMealThumb }
                alt={ food.strMeal }
                width="20%"
                data-testid={ `${index}-card-img` }
              />
            </div>
          </Link>))
      }
      <Footer />
    </>
  );
}

export default Recipes;
