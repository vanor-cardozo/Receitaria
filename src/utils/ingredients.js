export default function getIngredients(foodDetail) {
  const INGREDIENTS_NUMBER = 20;
  const ingredients = [];
  for (let i = 1; i < INGREDIENTS_NUMBER; i += 1) {
    if (foodDetail[`strIngredient${i}`] !== ''
    && foodDetail[`strIngredient${i}`] !== null) {
      ingredients.push(foodDetail[`strIngredient${i}`]);
    }
  }
  return ingredients;
}
