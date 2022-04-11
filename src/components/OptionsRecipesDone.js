import React from 'react';
import { useFilter } from '../context/DetailContext';
import '../css/OptionRecipes.css';

function OptionsRecipesDone() {
  const { setDoneFilterBy } = useFilter();

  return (
    <div className="box-container">
      <button
        onClick={ () => setDoneFilterBy('All') }
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ () => setDoneFilterBy('food') }
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        onClick={ () => setDoneFilterBy('drink') }
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

export default OptionsRecipesDone;
