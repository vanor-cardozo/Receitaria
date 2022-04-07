import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import FooterBar from '../css/Footer';

function Footer() {
  const history = useHistory();

  return (
    <FooterBar data-testid="footer" className="footer">
      <button onClick={ () => history.push('/drinks') } type="button">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="go to drinks" />
      </button>
      <button onClick={ () => history.push('/explore') } type="button">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="go to explore"
        />
      </button>
      <button onClick={ () => history.push('/foods') } type="button">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="go to foods" />
      </button>
    </FooterBar>
  );
}

export default Footer;
