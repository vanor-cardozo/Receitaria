import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import RecipesContext from '../context/RecipesContext';

function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user')) || '';
  const history = useHistory();

  const {
    setEmail,
    setPassword,
  } = useContext(RecipesContext);

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <HeaderWithoutSearchButton title="Profile" />
      <h1>Profile</h1>
      <p data-testid="profile-email">{ email }</p>
      <div>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClick }
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
