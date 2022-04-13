import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import Container from '../css/Explore';

function Explore() {
  const history = useHistory();
  return (
    <>
      <HeaderWithoutSearchButton title="Explore" />
      <Container>
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </Container>
      <Footer />
    </>
  );
}

export default Explore;
