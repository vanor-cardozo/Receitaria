const fetchDrinks = async (arg) => {
  const { searchType, searchRecipe } = arg;
  if (searchType === 'Firstletter' && searchRecipe.length > 1) {
    return global.alert('Your search must have only 1 (one) character');
  }
  let URL;
  if (searchType === 'Name') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchRecipe}`;
  }
  if (searchType === 'Ingredients') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchRecipe}`;
  }
  if (searchType === 'Firstletter') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchRecipe}`;
  }
  const endpoint = await fetch(URL);
  const response = await endpoint.json();
  return response;
};

export default fetchDrinks;
