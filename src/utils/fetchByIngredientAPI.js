const fetchByIngredientAPI = async (arg, type) => {
  let URL;
  if (type === 'food') URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${arg}`;
  if (type === 'drink') URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${arg}`;
  const response = await (await fetch(URL)).json();

  if (type === 'food' && response.meals === null) return { meals: [] };
  if (type === 'drink' && response.drinks === null) return { drinks: [] };
  return response;
};

export default fetchByIngredientAPI;
