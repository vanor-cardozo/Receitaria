import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [API, setAPI] = useState();
  const [foodsApi, setFoodsApi] = useState({ meals: [] });
  const [drinksApi, setDrinksApi] = useState({ drinks: [] });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

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
    redirect,
    setRedirect,
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
