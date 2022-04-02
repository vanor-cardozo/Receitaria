import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipesDetailsFoods() {
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState();
  // const [video, setVideo] = useState();

  useEffect(() => {
    const api = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const { meals } = await (await fetch(URL)).json();
      setFoodDetail(meals[0]);
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
            <p data-testid="recype-category">{ foodDetail.strCategory }</p>
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
            {/* { video } */}
            <ul>
              {/* <li data-testid={ `${index}-recomendation-card` }>a</li> */}
            </ul>
            <button type="button" data-testid="start-recipe-btn">Start</button>
          </div>
        )
      }
    </main>
  );
}

export default RecipesDetailsFoods;
