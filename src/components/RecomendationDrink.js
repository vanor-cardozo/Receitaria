import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function RecomendationDrink({ recomendations }) {
  return (
    <ul>
      <div className="rec">
        {
          recomendations.map((rec, index) => (
            <li
              style={ { display: 'inline-block' } }
              key={ rec.idDrink }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                className="rec"
                src={ rec.strDrinkThumb }
                alt={ rec.strDrink }
              />
              <p>{ rec.strAlcoholic }</p>
              <span data-testid={ `${index}-recomendation-title` }>
                { rec.strDrink }
              </span>
            </li>
          ))
        }
      </div>
    </ul>
  );
}

RecomendationDrink.propTypes = {
  recomendations: PropTypes.arrayOf(string).isRequired,
};
