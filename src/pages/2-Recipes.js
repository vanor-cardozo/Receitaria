import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import fetchFoods from '../utils/fetchFoods';

function Recipes() {
  const { setFoodsApi, API } = useContext(RecipesContext);

  useEffect(() => {
    if (API) {
      const api = async () => {
        const result = await fetchFoods(API);
        setFoodsApi(result);
      };
      api();
    }
  }, [API, setFoodsApi]);

  return (
    <>
      <Header title="Foods" />
      <h1>Tela principal de receitas de comidas.</h1>
      <Footer />
    </>
  );
}

export default Recipes;
