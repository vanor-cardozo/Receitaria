const localStorageLogin = (user) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify(user));
};

export const localStorageFavorite = (obj, typeString, favoriteOn) => {
  const isFood = typeString === 'food';
  const favorite = {
    id: isFood ? obj.idMeal : obj.idDrink,
    type: typeString,
    nationality: isFood ? obj.strArea : '',
    category: obj.strCategory,
    alcoholicOrNot: isFood ? '' : obj.strAlcoholic,
    name: isFood ? obj.strMeal : obj.strDrink,
    image: isFood ? obj.strMealThumb : obj.strDrinkThumb,
  };

  const idDetail = isFood ? obj.idMeal : obj.idDrink;

  if (!favoriteOn) {
    const newStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const isFavorite = newStorage.find(({ id }) => id === idDetail);
    if (!isFavorite) {
      newStorage.push(favorite);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  }
  if (favoriteOn) {
    const newStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const removingFavorite = newStorage.filter(({ id }) => id !== idDetail);
    localStorage.setItem('favoriteRecipes', JSON.stringify(removingFavorite));
  }
};

export default localStorageLogin;
