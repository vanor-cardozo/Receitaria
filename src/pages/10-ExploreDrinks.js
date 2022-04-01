import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import OptionsDrinks from '../components/OptionsDrinks'; // Commit novo PR

function ExploreDrinks() {
  return (
    <>
      <HeaderWithoutSearchButton title="Explore Drinks" />
      <OptionsDrinks />
      {/* <h1>Explore Drinks</h1> */} 
      <Footer />
    </>
  );
}

export default ExploreDrinks;
