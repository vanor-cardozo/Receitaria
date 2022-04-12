import React from 'react';
import PropTypes, { string } from 'prop-types';
import '../css/Recomendation.css';

export default function RecomendationFood({ recomendations }) {
  return (
    <ul>
      <div className="rec">
        {
          recomendations.map((rec, index) => (
            <li
              key={ rec.idMeal }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ rec.strMealThumb }
                alt={ rec.strMeal }
              />
              <p data-testid={ `${index}-recomendation-title` }>
                { rec.strMeal }
                <br />
                { rec.strCategory }
              </p>
            </li>
          ))
        }
      </div>
    </ul>
  );
}

RecomendationFood.propTypes = {
  recomendations: PropTypes.arrayOf(string).isRequired,
};
