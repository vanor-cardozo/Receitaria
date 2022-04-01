import React from 'react';
import PropTypes from 'prop-types';
// import fetchByCategory from '../utils/fetchByCategory';
// import RecipesContext from '../context/RecipesContext';

function FiltersRecipe({ categoryType }) {
  // const { setDrinksApi, setFoodsApi } = useContext(RecipesContext);
  const categorysFoods = ['All', 'Beef', 'Chicken', 'Breakfast', 'Dessert', 'Goat'];
  const categorysDrinks = ['Ordinary Drink', 'Cocktail',
    'Milk / Float / Shake', 'Other/Unknown', 'Cocoa'];

  const categorys = categoryType === 'foods' ? categorysFoods : categorysDrinks;

  // async function filterByCategory(category) {
  //   console.log(category);
  //   const result = await fetchByCategory(category);
  //   console.log(result, 'resultado');
  //   if (categoryType === 'foods') return setFoodsApi(result);
  //   if (categoryType === 'drinks') return setDrinksApi(result);
  // }

  return (
    <>
      {
        categorys.map((category) => (
          <button
            // onClick={ () => filterByCategory(category) }
            key={ category }
            type="button"
            data-testid={ `${category}-category-filter` }
          >
            { category }
          </button>
        ))
      }
    </>
  );
}

FiltersRecipe.propTypes = {
  categoryType: PropTypes.string.isRequired,
};

export default FiltersRecipe;
