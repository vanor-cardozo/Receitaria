import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function CheckIngredients({ type, ingredients, measure, setChecked }) {
  function isChecked(ingredient) {
    const isCheck = JSON.parse(localStorage.getItem(type)) || {};
    if (isCheck[ingredient]) return isCheck[ingredient] === true;
    return false;
  }
  // let isCheck;

  // useEffect(() => {
  //   isCheck = JSON.parse(localStorage.getItem('check')) || {};
  //   console.log(isCheck);
  // }, []);
  return (
    <form>
      {
        ingredients && ingredients.map((ingredient, index) => (
          <div
            data-testid={ `${index}-ingredient-step` }
            key={ index }
          >
            <input
              type="checkbox"
              id={ ingredient }
              checked={ isChecked(ingredient) }
              onChange={ () => {
                const getChecked = JSON.parse(localStorage.getItem(type)) || {};
                const newOBJ = { ...getChecked, [ingredient]: !getChecked[ingredient] };
                localStorage.setItem(type, JSON.stringify(newOBJ));
                setChecked((prevState) => (
                  { ...prevState, [ingredient]: !prevState[ingredient] }
                ));
              } }
            />
            <span>{`${ingredient} - ${measure[index]}`}</span>
            <br />
          </div>
        ))
      }
    </form>
  );
}

CheckIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(string),
  measure: PropTypes.arrayOf(string),
  setChecked: PropTypes.func,
}.isRequired;
