const fetchFoodsIngredients = async () => {
  const { meals } = await (await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  )).json();
  const MAX_ARRAY_ITEMS = 12;
  const foodsIngredients = meals.filter((_, index) => index < MAX_ARRAY_ITEMS);
  return foodsIngredients;
};

export default fetchFoodsIngredients;
