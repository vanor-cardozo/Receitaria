import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ path }) {
  const [shareRecipe, setShareRecipe] = useState();
  return (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ () => {
        setShareRecipe('Link copied!');
        navigator.clipboard.writeText(`http://localhost:3000${path}`);
        const timer = 1000;
        setTimeout(() => {
          setShareRecipe();
        }, timer);
      } }
    >
      { shareRecipe }
      {
        !shareRecipe && <img src={ shareIcon } alt="share icon" />
      }
    </button>
  );
}

ShareButton.propTypes = {
  path: PropTypes.string.isRequired,
};
