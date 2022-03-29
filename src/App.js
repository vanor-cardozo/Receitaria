import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/1-Login';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <Login />
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
