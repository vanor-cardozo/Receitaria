const fetchDrinks = async (arg) => {
  const { searchType, searchRecipe } = arg;
  if (searchType === 'Firstletter' && searchRecipe.length > 1) {
    global.alert('Your search must have only 1 (one) character');
    return { drinks: [] };
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
  if (response.drinks === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return { drinks: [] };
  }
  return response;
};

export default fetchDrinks;
