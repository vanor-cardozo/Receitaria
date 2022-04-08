import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import fetchDrinksIngredients from '../utils/fetchDrinksIngredients';

function ExploreDrinksIngredients() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);
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
            data-testid={ `${index}-ingredient-card` }
          >
            <a href="/drinks" data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${_item.strIngredient1}-Small.png` }
                alt={ _item.strIngredient1 }
              />
            </a>
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
