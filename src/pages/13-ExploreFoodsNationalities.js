import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
// Inclusão de comentário para gerar novo commit e consequentemente fazer novo push
function ExploreFoodsNationalities() {
  const [options, setOptions] = useState([]);
  const [area, setArea] = useState('American');
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

    const fetchAndSetState = async () => {
      const api = (await (await fetch(URL)).json()).meals;
      setOptions(api);
    };
    fetchAndSetState();
  }, []);

  useEffect(() => {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    if (area) {
      const fetchAndSetState = async () => {
        try {
          const api = (await (await fetch(URL)).json()).meals;
          const MaxArrayIndex = 12;
          const filterApi = api.filter((_, i) => i < MaxArrayIndex);
          setRecipes(filterApi);
        } catch (err) {
          console.log(` Erro: ${err} `);
        }
      };
      fetchAndSetState();
    }
  }, [area]);
  return (
    <>
      <HeaderWithoutSearchButton title="Explore Nationalities" />
      <select
        onChange={ ({ target: { value } }) => setArea(value) }
        data-testid="explore-by-nationality-dropdown"
      >
        <option data-testid="All-option">
          All
        </option>
        {
          options.map(({ strArea }) => (
            <option data-testid={ `${strArea}-option` } key={ strArea }>
              { strArea }
            </option>
          ))
        }
      </select>
      {
        recipes.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <Link
            to={ `/foods/${idMeal}` }
            key={ idMeal }
          >
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ strMealThumb }
                alt={ strMeal }
                width="20%"
                data-testid={ `${index}-card-img` }
              />
              <h4 data-testid={ `${index}-card-name` }>{ strMeal }</h4>
            </div>
          </Link>
        ))
      }
      <Footer />
    </>
  );
}

export default ExploreFoodsNationalities;
