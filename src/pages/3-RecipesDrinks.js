import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FiltersRecipe from '../components/FiltersRecipe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchDrinks from '../utils/fetchDrinks';
import fetchDrinksDefault from '../utils/fetchDrinksDefault';
import '../css/Recomendation.css';
import { useFetchIngredient } from '../context/DetailContext';
import fetchByIngredientAPI from '../utils/fetchByIngredientAPI';
import Container from '../css/Drinks';

function RecipesDrinks() {
  const { setDrinksApi, API, drinksApi, setRedirect,
    redirect } = useContext(RecipesContext);
  const history = useHistory();

  const { fetchByIngredient, setFetchByIngredient } = useFetchIngredient();

  useEffect(() => {
    if (API) {
      const api = async () => {
        const result = await fetchDrinks(API);
        setDrinksApi(result);
      };
      api();
    }
  }, [API, setDrinksApi]);

  useEffect(() => {
    const { fetch, ingredient } = fetchByIngredient;
    let api;
    if (fetch) {
      api = async () => {
        const result = await fetchByIngredientAPI(ingredient, 'drink');
        setDrinksApi(result);
      };
    } else {
      api = async () => {
        const result = await fetchDrinksDefault();
        setDrinksApi(result);
      };
    }
    api();
  }, [setDrinksApi, fetchByIngredient]);

  useEffect(() => () => setFetchByIngredient({ fetch: false, ingredient: '' }),
    [setFetchByIngredient]); // COMPONENT UNMOUNT

  if (drinksApi && drinksApi.drinks.length === 1 && redirect) {
    const id = drinksApi.drinks[0].idDrink;
    history.push(`/drinks/${id}`);
    setRedirect(false);
  }
  const MAX_DRINKS = 12;
  const drinks = drinksApi && drinksApi.drinks.filter((_, i) => i < MAX_DRINKS);

  return (
    <>
      <Header title="Drinks" />
      <FiltersRecipe categoryType="drinks" />
      <Container>
        {
          drinksApi && drinksApi.drinks.length > 1
            ? drinks.map((drink, index) => (
              <Link
                to={ `/drinks/${drinksApi.drinks[index].idDrink}` }
                key={ drink.idDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <div>
                  <img
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                    width="20%"
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
                </div>
              </Link>))
            : ''
        }
      </Container>
      <Footer />
    </>
  );
}

export default RecipesDrinks;
