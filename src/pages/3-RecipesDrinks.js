import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchDrinks from '../utils/fetchDrinks';

function RecipesDrinks() {
  const { setDrinksApi, API } = useContext(RecipesContext);

  useEffect(() => {
    if (API) {
      const api = async () => {
        const result = await fetchDrinks(API);
        setDrinksApi(result);
      };
      api();
    }
  }, [API, setDrinksApi]);
  return (
    <>
      <Header title="Drinks" />
      <h1>Tela principal de receitas de bebidas.</h1>
    </>
  );
}

export default RecipesDrinks;
