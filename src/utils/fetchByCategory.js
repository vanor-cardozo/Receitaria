const fetchByCategory = async (arg) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${arg}`;
  const response = await (await fetch(URL)).json();
  if (response.meals === null) return { meals: [] };
  if (response.drinks === null) return { drinks: [] };
  return response;
};

export default fetchByCategory;
