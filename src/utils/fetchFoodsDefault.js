const fetchFoodsDefault = async () => {
  const response = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
  return response;
};

export default fetchFoodsDefault;
