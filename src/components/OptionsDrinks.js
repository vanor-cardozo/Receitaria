import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../css/Explore';

function OptionsDrinks() {
  const history = useHistory();

  return (
    <Container>
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
    </Container>
  );
}

export default OptionsDrinks;
