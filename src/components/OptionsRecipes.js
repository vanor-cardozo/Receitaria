import React from 'react';
import '../css/OptionRecipes.css';

function OptionsRecipes() {
  return (
    <div className="box-container">
      <button
        onClick={ () => true }
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ () => true }
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        onClick={ () => true }
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

export default OptionsRecipes;
