import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function Ingredients({ ingredients, measure }) {
  return (
    <ul>
      {
        ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} - ${measure[index]}`}
          </li>
        ))
      }
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(string).isRequired,
  measure: PropTypes.arrayOf(string).isRequired,
};
