import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../images/Profile.png';
import HeaderBar from '../css/HeaderWithout';

function HeaderWithoutSearchButton(props) {
  const { title } = props;
  const history = useHistory();
  return (
    <HeaderBar>
      <button onClick={ () => history.push('./profile') } type="button">
        <img data-testid="profile-top-btn" src={ Profile } alt="profile" />
      </button>
      <p data-testid="page-title">{ title }</p>
    </HeaderBar>
  );
}

HeaderWithoutSearchButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderWithoutSearchButton;
