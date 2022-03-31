const fetchFoods = async (arg) => {
  const { searchType, searchRecipe } = arg;
  console.log(searchRecipe, searchType);
  if (searchType === 'Firstletter' && searchRecipe.length > 1) {
    return global.alert('Your search must have only 1 (one) character');
  }
  let URL;
  if (searchType === 'Name') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`;
  }
  if (searchType === 'Ingredients') {
    URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchRecipe}`;
  }
  if (searchType === 'Firstletter') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchRecipe}`;
  }
  console.log('entrei');
  const endpoint = await fetch(URL);
  const response = await endpoint.json();
  console.log(response);
  return response;
};

export default fetchFoods;
