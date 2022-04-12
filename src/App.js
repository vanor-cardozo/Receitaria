import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/1-Login';
import RecipesProvider from './context/RecipesProvider';
import Recipes from './pages/2-Recipes';
import RecipesDrinks from './pages/3-RecipesDrinks';
import RecipesDetailsFoods from './pages/4-RecipesDetailsFoods';
import RecipesDetailsDrinks from './pages/5-RecipesDetailsDrinks';
import FoodsInProgress from './pages/6-FoodsInProgress';
import DrinksInProgress from './pages/7-DrinksInProgress';
import Explore from './pages/8-Explore';
import ExploreFoods from './pages/9-ExploreFoods';
import ExploreDrinks from './pages/10-ExploreDrinks';
import ExploreFoodsIngredients from './pages/11-ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/12-ExploreDrinksIngredients';
import ExploreFoodsNationalities from './pages/13-ExploreFoodsNationalities';
import Profile from './pages/14-Profile';
import RecipesDone from './pages/15-RecipesDone';
import RecipesFavorites from './pages/16-RecipesFavorites';
import DetailProvider from './context/DetailContext';
import NotFound from './pages/17-NotFound';

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <DetailProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/foods/:id" component={ RecipesDetailsFoods } />
            <Route exact path="/drinks/:id" component={ RecipesDetailsDrinks } />
            <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
            <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />
            <Route exact path="/explore" component={ Explore } />
            <Route exact path="/explore/foods" component={ ExploreFoods } />
            <Route exact path="/explore/drinks" component={ ExploreDrinks } />
            <Route
              exact
              path="/explore/foods/ingredients"
              component={ ExploreFoodsIngredients }
            />
            <Route
              exact
              path="/explore/drinks/ingredients"
              component={ ExploreDrinksIngredients }
            />
            <Route
              exact
              path="/explore/foods/nationalities"
              component={ ExploreFoodsNationalities }
            />
            <Route
              exact
              path="/explore/drinks/nationalities"
              component={ NotFound }
            />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/done-recipes" component={ RecipesDone } />
            <Route exact path="/favorite-recipes" component={ RecipesFavorites } />
            <Route exact path="/foods" component={ Recipes } />
            <Route exact path="/drinks" component={ RecipesDrinks } />
          </Switch>
        </DetailProvider>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
