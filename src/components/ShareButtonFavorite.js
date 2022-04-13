import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Share from '../images/Share.svg';

export default function ShareButtonFavorite({ index, path }) {
  const [shareRecipe, setShareRecipe] = useState();

  return (
    <button
      data-testid={ `${index}-horizontal-share-btn` }
      type="button"
      onClick={ () => {
        setShareRecipe('Link copied!');
        navigator.clipboard.writeText(`http://localhost:3000${path}`);
        const timer = 1000;
        setTimeout(() => {
          setShareRecipe();
        }, timer);
      } }
      src="shareIcon" // bug do teste
    >
      { shareRecipe }
      {
        !shareRecipe && <img src={ Share } alt="share icon" />
      }
    </button>
  );
}

ShareButtonFavorite.propTypes = {
  index: PropTypes.string,
  path: PropTypes.string,
}.isRequired;
