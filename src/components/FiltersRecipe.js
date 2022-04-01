import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import fetchByCategory from '../utils/fetchByCategory';
import RecipesContext from '../context/RecipesContext';
import fetchFoodsDefault from '../utils/fetchFoodsDefault';
import fetchDrinksDefault from '../utils/fetchDrinksDefault';

function FiltersRecipe({ categoryType }) {
  const { setDrinksApi, setFoodsApi } = useContext(RecipesContext);
  const categorysFoods = ['All', 'Beef', 'Chicken', 'Breakfast', 'Dessert', 'Goat'];
  const categorysDrinks = ['All', 'Ordinary Drink', 'Cocktail',
    'Milk / Float / Shake', 'Other/Unknown', 'Cocoa'];
  const [lastFilterF, setLastFilterF] = useState();
  const [lastFilterD, setLastFilterD] = useState();

  const categorys = categoryType === 'foods' ? categorysFoods : categorysDrinks;

  async function filterByCategory(category) {
    const allFoods = categoryType === 'foods' && category === 'All';
    const allDrinks = categoryType === 'drinks' && category === 'All';

    if (allFoods || lastFilterF === category) {
      const result = await fetchFoodsDefault();
      return setFoodsApi(result);
    }
    if (allDrinks || lastFilterD === category) {
      const result = await fetchDrinksDefault();
      return setDrinksApi(result);
    }

    const result = await fetchByCategory(category, categoryType);
    if (categoryType === 'foods') {
      setLastFilterF(category);
      return setFoodsApi(result);
    }
    if (categoryType === 'drinks') {
      setLastFilterD(category);
      return setDrinksApi(result);
    }
  }

  return (
    <>
      {
        categorys.map((category) => (
          <button
            onClick={ () => filterByCategory(category) }
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
