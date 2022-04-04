export default function isStartedFood(id) {
  const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  if (meals) {
    return Object.prototype.hasOwnProperty.call(meals, [id]);
  }
  return false;
}

export function isStartedDrink(id) {
  const { cocktails } = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  if (cocktails) {
    return Object.prototype.hasOwnProperty.call(cocktails, [id]);
  }
  return false;
}
