const getIngredientsAndMeasure = (
  drinkDetail, INGREDIENTS_NUMBER, ingredients, measure,
) => {
  for (let i = 1; i < INGREDIENTS_NUMBER; i += 1) {
    const drinkIngredient = drinkDetail[`strIngredient${i}`];
    if (drinkIngredient != null
      && drinkIngredient !== ''
      && drinkIngredient !== ' ') {
      ingredients.push(drinkDetail[`strIngredient${i}`]);
    }
    if (drinkDetail[`strMeasure${i}`] != null) {
      measure.push(drinkDetail[`strMeasure${i}`]);
    }
    // if (drinkDetail[`strIngredient${i}`] != null
    // && drinkDetail[`strMeasure${i}`] == null) {
    //   measure.push('');
    // }
  }
};

export default getIngredientsAndMeasure;
