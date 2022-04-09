import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import fetchDrinksIngredients from '../utils/fetchDrinksIngredients';
import { useFetchIngredient } from '../context/DetailContext';

function ExploreDrinksIngredients() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const { setFetchByIngredient } = useFetchIngredient();
  const { push } = useHistory();
  useEffect(() => {
    const drinksIngredientsAPI = async () => {
      const drinksIngredientsResponse = await fetchDrinksIngredients();
      setDrinksIngredients(drinksIngredientsResponse);
    };
    drinksIngredientsAPI();
  }, []);

  return (
    <div>
      <HeaderWithoutSearchButton title="Explore Ingredients" />
      {' '}
      <section>
        {drinksIngredients && drinksIngredients.map((_item, index) => (
          <div
            key={ _item.strIngredient1 }
            className="container"
          >
            <button
              type="button"
              onClick={ () => {
                setFetchByIngredient({
                  fetch: true, ingredient: _item.strIngredient1 });
                push('/drinks');
              } }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${_item.strIngredient1}-Small.png` }
                alt={ _item.strIngredient1 }
              />
            </button>
            <span
              data-testid={ `${index}-card-name` }
            >
              { _item.strIngredient1 }
            </span>
          </div>))}
        ,
      </section>
      <Footer />
      {' '}
    </div>
  );
}

export default ExploreDrinksIngredients;
