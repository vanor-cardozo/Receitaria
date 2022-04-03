import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
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
    >
      { shareRecipe }
      {
        !shareRecipe && <img src={ shareIcon } alt="share icon" />
      }
    </button>
  );
}
