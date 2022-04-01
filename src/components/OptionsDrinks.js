import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/OptionFoodsAndDrinks.css';

function OptionsDrinks() {
  const history = useHistory();

  return (
    <div className="box-container">
      <button
        onClick={ () => history.push('/explore/drinks/ingredients') }
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        onClick={ () => history.push('/drinks/178319') }
        // onClick={ () => history.push('/drinks/:id') }
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
    </div>
  );
}

export default OptionsDrinks;
