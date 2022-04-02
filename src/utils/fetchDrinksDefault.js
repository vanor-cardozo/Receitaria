const fetchDrinksDefault = async () => {
  const response = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
  return response;
};

export default fetchDrinksDefault;
