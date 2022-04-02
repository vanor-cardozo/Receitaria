const localStorageLogin = (user) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify(user));
};

export default localStorageLogin;
