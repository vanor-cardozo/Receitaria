import React from 'react';
import FavoriteButtonDoneRecipe from './FavoriteRecipesButton';
import '../css/DoneRecipes.css';
import ShareButtonFavorite from './ShareButtonFavorite';
import { useFilter } from '../context/DetailContext';
import OptionsRecipesDone from './OptionsRecipesDone';

function DoneRecipes() {
  const done = JSON.parse(localStorage.getItem('doneRecipes'));
  const { doneFilterBy } = useFilter();

  return (
    <>
      <OptionsRecipesDone />
      {
        done
          .filter((doneRecipe) => {
            if (doneFilterBy === 'All') return true;
            return doneRecipe.type === doneFilterBy;
          })
          .map((doneItem, index) => (
            <div key={ doneItem.id } className="box-container">
              <a href={ `./${doneItem.type}s/${doneItem.id}` }>
                <img
                  style={ { width: '100px' } }
                  data-testid={ `${index}-horizontal-image` }
                  src={ doneItem.image }
                  alt={ doneItem.name }
                />
              </a>
              <div>
                <a href={ `./${doneItem.type}s/${doneItem.id}` }>
                  <p data-testid={ `${index}-horizontal-name` }>
                    {doneItem.name}
                  </p>
                </a>
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
                <ShareButtonFavorite
                  path={ `/${doneItem.type}s/${doneItem.id}` }
                  index={ index }
                />
                <FavoriteButtonDoneRecipe index={ index } />
              </div>
            </div>
          ))
      }

    </>
  );
}

export default DoneRecipes;
