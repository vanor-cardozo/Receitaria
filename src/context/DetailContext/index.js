import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DetailContext = createContext();

export default function DetailProvider({ children }) {
  const [foodDetail, setFoodDetail] = useState();
  const [drinkDetail, setDrinkDetail] = useState();
  const [typeString, setTypeString] = useState();
  const [sharePath, setSharePath] = useState();
  const [favorites, setFavorites] = useState([]);
  const [filterBy, setFilterBy] = useState('All');
  const [doneFilterBy, setDoneFilterBy] = useState('All');

  return (
    <DetailContext.Provider
      value={ {
        foodDetail,
        setFoodDetail,
        drinkDetail,
        setDrinkDetail,
        typeString,
        setTypeString,
        sharePath,
        setSharePath,
        favorites,
        setFavorites,
        filterBy,
        setFilterBy,
        doneFilterBy,
        setDoneFilterBy,
      } }
    >
      { children }
    </DetailContext.Provider>
  );
}

export function useDetail() {
  const context = useContext(DetailContext);
  const { foodDetail, drinkDetail, setDrinkDetail, setFoodDetail } = context;
  return { foodDetail, setFoodDetail, drinkDetail, setDrinkDetail };
}

export function useTypeString() {
  const context = useContext(DetailContext);
  const { typeString, setTypeString } = context;
  return { typeString, setTypeString };
}

export function useShare() {
  const context = useContext(DetailContext);
  const { sharePath, setSharePath } = context;
  return { sharePath, setSharePath };
}

export function useFavorites() {
  const context = useContext(DetailContext);
  const { favorites, setFavorites } = context;
  return { favorites, setFavorites };
}

export function useFilter() {
  const context = useContext(DetailContext);
  const { filterBy, setFilterBy, doneFilterBy, setDoneFilterBy } = context;
  return { filterBy, setFilterBy, doneFilterBy, setDoneFilterBy };
}

DetailProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
