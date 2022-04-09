import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import { useFetchIngredient } from '../context/DetailContext';
import fetchFoodsIngredients from '../utils/fetchFoodsIngredients';

function ExploreFoodsIngredients() {
  const [foodsIngredients, setFoodsIngredients] = useState([]);
  const { setFetchByIngredient } = useFetchIngredient();
  const { push } = useHistory();
  useEffect(() => {
    const foodsIngredientsAPI = async () => {
      const foodsIngredientsResponse = await fetchFoodsIngredients();
      setFoodsIngredients(foodsIngredientsResponse);
    };
    foodsIngredientsAPI();
  }, []);

  return (
    <div>
      <HeaderWithoutSearchButton title="Explore Ingredients" />
      {' '}
      <section>
        {foodsIngredients && foodsIngredients.map((_item, index) => (
          <div
            key={ _item.idIngredient }
            className="container"
          >
            <button
              type="button"
              onClick={ () => {
                setFetchByIngredient({
                  fetch: true, ingredient: _item.strIngredient });
                push('/foods');
              } }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${_item.strIngredient}-Small.png` }
                alt={ _item.strIngredient }
              />
            </button>
            <span
              data-testid={ `${index}-card-name` }
            >
              { _item.strIngredient }
            </span>
          </div>))}
        ,
      </section>
      <Footer />
      {' '}
    </div>
  );
}

export default ExploreFoodsIngredients;
