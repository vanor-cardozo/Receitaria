const fetchRecomendationsDrinks = async () => {
  const { drinks } = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
  const MAX_ARRAY_ITEMS = 6;
  const recomendation = drinks.filter((_, index) => index < MAX_ARRAY_ITEMS);
  return recomendation;
};

export const fetchRecomendationsFoods = async () => {
  const { meals } = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
  const MAX_ARRAY_ITEMS = 6;
  const recomendation = meals.filter((_, index) => index < MAX_ARRAY_ITEMS);
  return recomendation;
};

export default fetchRecomendationsDrinks;
