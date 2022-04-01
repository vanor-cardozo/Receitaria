import React, { useState } from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [API, setAPI] = useState();// const [data, setData] = useState([]);
  const [foodsApi, setFoodsApi] = useState();
  const [drinksApi, setDrinksApi] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   if (API) {
  //     const api = async () => {
  //       const result = await fetchFoods(API);
  //       setFoodsApi(result);
  //     };
  //     api();
  //   }
  // }, [API]);

  const values = {
    setAPI,
    foodsApi,
    setFoodsApi,
    API,
    drinksApi,
    setDrinksApi,
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <RecipesContext.Provider value={ values }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;
