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
        showSearchInput && <input data-testid="search-input" />
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
