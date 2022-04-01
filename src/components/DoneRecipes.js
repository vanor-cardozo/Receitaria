import React, {/*  useContext  */} from 'react';
import shareIcon from '../images/shareIcon.svg';
import '../css/DoneRecipes.css';

function DoneRecipes() {
  // const { setFoodsApi, foodsApi, API } = useContext(RecipesContext);

  return (
    <div className="box-container">
      <img
        // data-testid="${index}-horizontal-image"
        data-testid="0-horizontal-image"
        src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        alt=""
      />
      <p
        // data-testid="${index}-horizontal-top-text"
        data-testid="0-horizontal-top-text"
      >
        categoria
      </p>
      <p
        // data-testid="${index}-horizontal-name"
        data-testid="0-horizontal-name"
      >
        nome
      </p>
      <p
        // data-testid="${index}-horizontal-done-date"
        data-testid="0-horizontal-done-date"

      >
        data
      </p>
      <img
        src={ shareIcon }
        alt="share"
        // data-testid="${index}-horizontal-share-btn"
        data-testid="0-horizontal-share-btn"
      />
      <p
        // data-testid="${index}-horizontal-done-date"
        data-testid="0-Pasta-horizontal-tag"
      />
      <p
        // data-testid="${index}-horizontal-done-date"
        data-testid="0-Curry-horizontal-tag"
      />
    </div>
  );
}

export default DoneRecipes;
