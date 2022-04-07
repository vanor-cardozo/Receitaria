import React from 'react';
import { useHistory } from 'react-router-dom';
import Drinks from '../images/Drinks.png';
import Explore from '../images/Explore.png';
import Food from '../images/Food.png';
import FooterBar from '../css/Footer';

function Footer() {
  const history = useHistory();

  return (
    <FooterBar data-testid="footer" className="footer">
      <button onClick={ () => history.push('/drinks') } type="button">
        <img data-testid="drinks-bottom-btn" src={ Drinks } alt="go to drinks" />
      </button>
      <button onClick={ () => history.push('/explore') } type="button">
        <img
          data-testid="explore-bottom-btn"
          src={ Explore }
          alt="go to explore"
        />
      </button>
      <button onClick={ () => history.push('/foods') } type="button">
        <img data-testid="food-bottom-btn" src={ Food } alt="go to foods" />
      </button>
    </FooterBar>
  );
}

export default Footer;
