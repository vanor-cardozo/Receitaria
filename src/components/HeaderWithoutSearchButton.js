import React from 'react';
import '../css/HeaderWithoutSearchButton.css';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';

function HeaderWithoutSearchButton(props) {
  const { title } = props;
  const history = useHistory();
  return (
    <header>
      <div className="box-container">
        <button onClick={ () => history.push('./profile') } type="button">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
        </button>
        <h2 data-testid="page-title">{ title }</h2>
        <div />
      </div>
    </header>
  );
}

HeaderWithoutSearchButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderWithoutSearchButton;
