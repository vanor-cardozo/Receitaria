import React from 'react';
// import React, { useState, useEffect } from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const addPlanets = async () => {
  //     const dataPlanets = await starWarsApi();
  //     setData(dataPlanets);
  //   };
  //   addPlanets();
  // }, []);
  return (
    <RecipesContext.Provider value="ok">
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;
