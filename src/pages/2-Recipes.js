import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FiltersRecipe from '../components/FiltersRecipe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchFoods from '../utils/fetchFoods';
import fetchFoodsDefault from '../utils/fetchFoodsDefault';
import Container from '../css/Recipes';

function Recipes() {
  const {
    setFoodsApi, foodsApi, API, redirect, setRedirect } = useContext(RecipesContext);
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

  useEffect(() => {
    const api = async () => {
      const result = await fetchFoodsDefault();
      setFoodsApi(result);
    };
    api();
  }, [setFoodsApi]);

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
      <FiltersRecipe categoryType="foods" />
      <Container>
        {foodsApi && meals.map((food, index) => (
          <Link
            key={ food.idMeal }
            data-testid={ `${index}-recipe-card` }
            to={ `/foods/${foodsApi.meals[index].idMeal}` }
          >
            <div>
              <img
                src={ food.strMealThumb }
                alt={ food.strMeal }
                width="20%"
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
            </div>
          </Link>))}
      </Container>
      <Footer />
    </>
  );
}

export default Recipes;
