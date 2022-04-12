import React, { useState } from 'react';
import Share from '../images/Share.svg';
import { useShare } from '../context/DetailContext';

export default function ShareButton() {
  const [shareRecipe, setShareRecipe] = useState();
  const { sharePath: path } = useShare();

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
      src="Share" // bug do teste
    >
      { shareRecipe }
      {
        !shareRecipe && <img src={ Share } alt="share icon" />
      }
    </button>
  );
}
