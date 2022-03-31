import React, { useState, useEffect } from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchFoods from '../utils/fetchRecipes';

function RecipesProvider({ children }) {
  const [API, setAPI] = useState();// const [data, setData] = useState([]);

  useEffect(() => {
    if (API) fetchFoods(API);
  }, [API]);

  const values = {
    setAPI,
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
