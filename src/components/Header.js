import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import profileSearch from '../images/searchIcon.svg';

function Header(props) {
  const { title } = props;
  const history = useHistory();
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <header>
      <button onClick={ () => history.push('/profile') } type="button">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
      </button>
      <h2 data-testid="page-title">{ title }</h2>
      <button onClick={ () => setShowSearchInput(!showSearchInput) } type="button">
        <img data-testid="search-top-btn" src={ profileSearch } alt="search" />
      </button>
      {
        showSearchInput && (
          <form
            data-testid="form-add-input"
            onSubmit={ (event) => event.preventDefault() }
          >
            <label htmlFor="search">
              <input id="search" data-testid="search-input" placeholder="Search Recipe" />
            </label>

            <label htmlFor="ingredients">
              <input
                id="ingredients"
                type="radio"
                data-testid="ingredient-search-radio"
                name="radio"
              />
              {' '}
              Ingredients
            </label>

            <label htmlFor="name">
              <input
                id="name"
                type="radio"
                data-testid="name-search-radio"
                name="radio"
              />
              {' '}
              Name
            </label>

            <label htmlFor="first-letter">
              <input
                id="first-letter"
                type="radio"
                data-testid="first-letter-search-radio"
                name="radio"
              />
              First Letter
            </label>

            <button
              id="button"
              type="submit"
              label="button"
              data-testid="exec-search-btn"
            >
              Search
            </button>
          </form>
        )
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
