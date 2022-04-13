import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import RecipesContext from '../context/RecipesContext';
import Container from '../css/Explore';

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
      <Container>
        <p data-testid="profile-email">{ email }</p>
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
      </Container>
      <Footer />
    </>
  );
}

export default Profile;
