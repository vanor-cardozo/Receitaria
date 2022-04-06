export default function startRecipeDrink(id, ingredients) {
  const progress = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || {};
  const newProgressOBJ = {
    ...progress,
    cocktails: {
      ...progress.cocktails,
      [id]: [...ingredients],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressOBJ));
}

export function startRecipeFood(id, ingredients) {
  const progress = JSON.parse(localStorage.getItem('inProgressRecipes'))
|| {};
  const newProgressOBJ = {
    ...progress,
    meals: {
      ...progress.meals,
      [id]: [...ingredients],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressOBJ));
}
