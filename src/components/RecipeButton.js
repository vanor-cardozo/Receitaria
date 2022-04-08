import React/* , { useContext, useState } */ from 'react';
import { useHistory } from 'react-router-dom';
import '../css/RecipeButton.css';

function RecipeButton(props) {
  const { ...props } = props;
  const { location: { pathname } } = props;
  const history = useHistory();
  const linksButton = ['/foods/:id/in-progress', '/drinks/:id/in-progress'];
  // const [isVisible, setIsVisible] = useState(true);
  // const { } = useContext(RecipesContext);// capturar o estado que 


  return (
    <div className="recipe-button">
      <button
        onClick={ () => {
          if (pathname.includes('/foods/')) {
            history.push(linksButton[0]);
          }
          history.push(linksButton[1]);
        } }
        type="button"
        data-testid="start-recipe-btn"
      >
        {/* { wipRecipe ? 'Continue Recipe' : 'Start Recipe' }  */}
      </button>
    </div>
  );
}

export default RecipeButton;
