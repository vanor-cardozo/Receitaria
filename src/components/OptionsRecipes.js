import React from 'react';
import { useFilter } from '../context/DetailContext';
import '../css/OptionRecipes.css';

function OptionsRecipes() {
  const { setFilterBy } = useFilter();

  return (
    <div className="box-container">
      <button
        onClick={ () => setFilterBy('All') }
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ () => setFilterBy('food') }
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        onClick={ () => setFilterBy('drink') }
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

export default OptionsRecipes;
