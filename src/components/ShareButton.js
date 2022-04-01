import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton() {
  const [shareRecipe, setShareRecipe] = useState('');
  console.log(shareRecipe);
  return (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ () => setShareRecipe('enviar receita') }
    >
      <img src={ shareIcon } alt="share icon" />
    </button>
  );
}
