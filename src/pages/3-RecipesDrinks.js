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

function RecipesDrinks() {
  const { setDrinksApi, API, drinksApi, setRedirect } = useContext(RecipesContext);
  const history = useHistory();

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
    const api = async () => {
      const result = await fetchDrinksDefault();
      setDrinksApi(result);
    };
    api();
  }, [setDrinksApi]);

  if (drinksApi && drinksApi.drinks.length === 1) {
    const id = drinksApi.drinks[0].idDrink;
    history.push(`/drinks/${id}`);
    setRedirect(false);
  }
  const MAX_DRINKS = 12;
  const drinks = drinksApi && drinksApi.drinks.filter((_, i) => i < MAX_DRINKS);

  return (
    <>
      <Header title="Drinks" />
      <h1>Tela principal de receitas de bebidas.</h1>
      <FiltersRecipe categoryType="drinks" />
      {
        drinksApi && drinksApi.drinks.length > 1
          ? drinks.map((drink, index) => (
            <Link
              to={ `/drinks/${drinksApi.drinks[index].idDrink}` }
              key={ drink.idDrink }
              data-testid={ `${index}-recipe-card` }
            >
              <div>
                <h4 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h4>
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  width="20%"
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </Link>))
          : ''
      }
      <Footer />
    </>
  );
}

export default RecipesDrinks;
