import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function RecomendationFood({ recomendations }) {
  return (
    <ul>
      {
        recomendations.map((rec, index) => (
          <li
            style={ { display: 'inline-block' } }
            key={ rec.idMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <img src={ rec.strMealThumb } alt={ rec.strMeal } />
            <p>{ rec.strCategory }</p>
            <span data-testid={ `${index}-recomendation-title` }>
              { rec.strMeal }
            </span>
          </li>
        ))
      }
    </ul>
  );
}

RecomendationFood.propTypes = {
  recomendations: PropTypes.arrayOf(string).isRequired,
};
