import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsFoods } from '../utils/fetchDetails';
import fetchRecomendationsDrinks from '../utils/fetchRecomendations';

function RecipesDetailsFoods() {
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState();
  const [recomendations, SetRecomendations] = useState([]);
  // const [video, setVideo] = useState();

  useEffect(() => {
    const api = async () => {
      setFoodDetail(await fetchDetailsFoods(id));
      SetRecomendations((await fetchRecomendationsDrinks()));
    };
    api();
  }, [id]);

  const ingredients = [];
  const measure = [];
  const INGREDIENTS_NUMBER = 20;

  const getIngredientsAndMeasure = () => {
    for (let i = 1; i < INGREDIENTS_NUMBER; i += 1) {
      if (foodDetail[`strIngredient${i}`] !== '') {
        ingredients.push(foodDetail[`strIngredient${i}`]);
      }
      if (foodDetail[`strMeasure${i}`] !== ' ') {
        measure.push(foodDetail[`strMeasure${i}`]);
      }
    }
  };

  // const req = async (arg) => {
  //   const videoURL = `https://www.youtube.com/oembed?url=${arg}&format=json`;
  //   const { html } = await (await fetch(videoURL)).json();
  //   setVideo(html);
  //   console.log(typeof video);
  // };

  if (foodDetail) {
    getIngredientsAndMeasure();
    // req(foodDetail.strYoutube);
  }

  return (
    <main>
      {
        foodDetail && (
          <div>
            <img src={ foodDetail.strMealThumb } alt={ id } data-testid="recipe-photo" />
            <h2 data-testid="recipe-title">{ foodDetail.strMeal }</h2>
            <button data-testid="share-btn" type="button">Share</button>
            <button data-testid="favorite-btn" type="button">Favorite</button>
            <p data-testid="recipe-category">{ foodDetail.strCategory }</p>
            <ul>
              {
                ingredients.map((ingredient, index) => (
                  <li
                    key={ ingredient }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {`${ingredient} - ${measure[index]}`}
                  </li>
                ))
              }
            </ul>
            <p data-testid="instructions">{ foodDetail.strInstructions }</p>
            <iframe title="youtubeDetail" data-testid="video" />
            <ul>
              {
                recomendations.map((rec, index) => (
                  <li
                    style={ { display: 'inline-block' } }
                    key={ rec.idDrink }
                    data-testid={ `${index}-recomendation-card` }
                  >
                    <span data-testid={ `${index}-recomendation-title` }>
                      { ` ${rec.strDrink} - ` }
                    </span>
                  </li>
                ))
              }
            </ul>
            <button type="button" data-testid="start-recipe-btn">Start</button>
          </div>
        )
      }
    </main>
  );
}

export default RecipesDetailsFoods;
