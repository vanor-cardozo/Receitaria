import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import '../css/DoneRecipes.css';

function DoneRecipes() {
  return (
    <div className="box-container">
      <img
        // data-testid="${index}-horizontal-image"
        src="https://www.themealdb.com/images/media/meals/wvqxrp1511792961.jpg"
        alt=""
      />
      <p>
        {/*  data-testid="${index}-horizontal-top-text" */}
        categoria
      </p>
      <p>
        {/* data-testid="${index}-horizontal-name" */ }
        nome
      </p>
      <p>
        {/* data-testid="${index}-horizontal-done-date" */}
        data
      </p>
      <img
        src={ shareIcon }
        alt="share"
        // data-testid="${index}-horizontal-share-btn"
      />
    </div>
  );
}

export default DoneRecipes;
