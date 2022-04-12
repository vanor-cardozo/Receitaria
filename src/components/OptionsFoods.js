import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../css/Explore';

function OptionsFoods() {
  const history = useHistory();

  return (
    <Container>
      <button
        onClick={ () => history.push('/explore/foods/ingredients') }
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        onClick={ () => history.push('/explore/foods/nationalities') }
        type="button"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </button>
      <button
        onClick={ () => history.push('/foods/52771') }
        // onClick={ () => history.push('/foods/:id') }
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
    </Container>
  );
}

export default OptionsFoods;
