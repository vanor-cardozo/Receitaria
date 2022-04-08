const fetchDrinksIngredients = async () => {
  const { drinks } = await (await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  )).json();
  const MAX_ARRAY_ITEMS = 12;
  const drinksIngredients = drinks.filter((_, index) => index < MAX_ARRAY_ITEMS);
  return drinksIngredients;
};

export default fetchDrinksIngredients;
