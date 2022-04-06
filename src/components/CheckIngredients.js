import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function CheckIngredients({ ingredients, measure, setChecked }) {
  return (
    <form>
      {
        ingredients && ingredients.map((ingredient, index) => (
          <div
            data-testid={ `${index}-ingredient-step` }
            key={ index }
          >
            <input
              type="checkbox"
              onChange={ () => setChecked((prevState) => (
                { ...prevState, [ingredient]: !prevState[ingredient] }
              )) }
            />
            <span>{`${ingredient} - ${measure[index]}`}</span>
            <br />
          </div>
        ))
      }
    </form>
  );
}

CheckIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(string).isRequired,
  measure: PropTypes.arrayOf(string).isRequired,
  setChecked: PropTypes.func.isRequired,
};
