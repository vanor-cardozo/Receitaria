const fetchDetailsDrinks = async (id) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { drinks } = await (await fetch(URL)).json();
  return drinks[0];
};

export const fetchDetailsFoods = async (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { meals } = await (await fetch(URL)).json();
  return meals[0];
};

export default fetchDetailsDrinks;
