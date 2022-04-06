import React from 'react';
import FavoriteButtonDoneRecipe from './FavoriteRecipesButton';
import '../css/DoneRecipes.css';
import OptionsRecipes from './OptionsRecipes';
import ShareButtonFavorite from './ShareButtonFavorite';

function DoneRecipes() {
  const done = JSON.parse(localStorage.getItem('doneRecipes'));

  return (
    <>
      <OptionsRecipes />
      <div className="box-container">
        {done.map((doneItem, index) => (
          <>
            <span key={ doneItem.id }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ doneItem.image }
                alt={ doneItem.name }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>
                {doneItem.name}
              </h3>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneItem.doneDate}
              </p>
              {doneItem.tags.map((tag) => (
                <p
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  key={ tag }
                >
                  {tag}
                </p>
              ))}
              {
                doneItem.type === 'food' ? (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    { `${doneItem.nationality} - ${doneItem.category}` }
                  </p>
                ) : (
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { doneItem.alcoholicOrNot }
                  </p>
                )
              }
            </span>
            <ShareButtonFavorite
              path={ `/${doneItem.type}s/${doneItem.id}` }
              index={ index }
            />
            <FavoriteButtonDoneRecipe index={ index } />
          </>
        ))}
      </div>

    </>
  );
}

export default DoneRecipes;
