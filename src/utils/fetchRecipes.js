const fetchFoods = async (arg) => {
  const { searchType, searchRecipe } = arg;
  if (searchType === 'FirstLetter' && searchType.length > 1) {
    return global.alert('Your search must have only 1 (one) character');
  }
  let URL;
  if (searchType === 'Name') {
    URL = `www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`;
  }
  if (searchType === 'Ingredients') {
    URL = `www.themealdb.com/api/json/v1/1/search.php?i=${searchRecipe}`;
  }
  if (searchType === 'FirstLetter') {
    URL = `www.themealdb.com/api/json/v1/1/search.php?f=${searchRecipe}`;
  }

  const endpoint = await fetch(URL);
  const response = await endpoint.json();
  return response;
};

// export const fetchDrinks = async (arg) => {
//   let URL;
//   if (name) URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${arg}`;
//   if (ingredients) URL = `//www.thecocktaildb.com/api/json/v1/1/filter.php?i=${arg}`;
//   if (firstLetter) URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${arg}`;

//   const endpoint = await fetch(URL);
//   const response = await endpoint.json();
//   return response;
// };

export default fetchFoods;
