import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchDrinks from '../utils/fetchDrinks';

function RecipesDrinks() {
  const { setDrinksApi, API, drinksApi } = useContext(RecipesContext);
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

  if (drinksApi && drinksApi.drinks.length === 1) {
    const id = drinksApi.drinks[0].idDrink;
    history.push(`/drinks/${id}`);
  }
  const MAX_DRINKS = 12;
  const drinks = drinksApi && drinksApi.drinks.filter((_, i) => i < MAX_DRINKS);
  // salva essa droga
  return (
    <>
      <Header title="Drinks" />
      <h1>Tela principal de receitas de bebidas.</h1>
      {
        drinksApi && drinksApi.drinks.length > 1
          ? drinks.map((drink, index) => (
            <div key={ drink.idDrink } data-testid={ `${index}-recipe-card` }>
              <h4 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h4>
              <img
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                width="20%"
                data-testid={ `${index}-card-img` }
              />
            </div>))
          : ''
      }
      <Footer />
    </>
  );
}

export default RecipesDrinks;
