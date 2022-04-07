import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../images/Profile.png';
import Search from '../images/Search.png';
import RecipesContext from '../context/RecipesContext';
import { Container, Form, HeaderSearch } from '../css/Header';

function Header(props) {
  const { title } = props;
  const history = useHistory();
  const [showSearchInput, setShowSearchInput] = useState(false);

  const [searchType, setSearchType] = useState('');
  const [searchRecipe, setSearchRecipe] = useState('');
  const { setAPI, setRedirect } = useContext(RecipesContext);

  return (
    <Container>
      <HeaderSearch>
        <button onClick={ () => history.push('/profile') } type="button">
          <img data-testid="profile-top-btn" src={ Profile } alt="profile" />
        </button>
        <h2 data-testid="page-title">{ title }</h2>
        <button onClick={ () => setShowSearchInput(!showSearchInput) } type="button">
          <img data-testid="search-top-btn" src={ Search } alt="search" />
        </button>
      </HeaderSearch>
      {
        showSearchInput && (
          <Form
            data-testid="form-add-input"
            onSubmit={ (event) => event.preventDefault() }
          >
            <div>
              <label htmlFor="search">
                <input
                  onChange={ ({ target }) => setSearchRecipe(target.value) }
                  id="search"
                  data-testid="search-input"
                  placeholder="Search Recipe"
                />
              </label>
              <button
                id="button"
                type="submit"
                label="button"
                data-testid="exec-search-btn"
                onClick={ () => {
                  setAPI({ searchType, searchRecipe });
                  setRedirect(true);
                } }
              >
                SEARCH
              </button>
            </div>
            <label htmlFor="ingredients">
              <input
                id="Ingredients"
                type="radio"
                data-testid="ingredient-search-radio"
                name="radio"
                onChange={ ({ target }) => (setSearchType(target.id)) }
              />
              Ingredients
            </label>
            <label htmlFor="name">
              <input
                id="Name"
                type="radio"
                data-testid="name-search-radio"
                name="radio"
                onChange={ ({ target }) => (setSearchType(target.id)) }
              />
              Name
            </label>
            <label htmlFor="first-letter">
              <input
                id="Firstletter"
                type="radio"
                data-testid="first-letter-search-radio"
                name="radio"
                onChange={ ({ target }) => (setSearchType(target.id)) }
              />
              First Letter
            </label>
          </Form>
        )
      }
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
