import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function Recomendations({ recomendations }) {
  return (
    <ul>
      {
        recomendations.map((rec, index) => (
          <li
            style={ { display: 'inline-block' } }
            key={ rec.idDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <span data-testid={ `${index}-recomendation-title` }>
              { ` ${rec.strDrink} - ` }
            </span>
          </li>
        ))
      }
    </ul>
  );
}

Recomendations.propTypes = {
  recomendations: PropTypes.arrayOf(string).isRequired,
};
