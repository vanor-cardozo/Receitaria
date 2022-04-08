import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import fetchFoodsIngredients from '../utils/fetchFoodsIngredients';

function ExploreFoodsIngredients() {
  const [foodsIngredients, setFoodsIngredients] = useState([]);
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
            data-testid={ `${index}-ingredient-card` }
          >
            <a
              href="/foods"/* data-testid={ `${index}-recipe-card` } */
              onClick={ () => true }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${_item.strIngredient}-Small.png` }
                alt={ _item.strIngredient }
              />
            </a>
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
