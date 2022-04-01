import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import OptionsFoods from '../components/OptionsFoods';

function ExploreFoods() {
  return (
    <>
      <HeaderWithoutSearchButton title="Explore Foods" />
      <OptionsFoods />
      {/* <h1>Explore Foods</h1> */}
      <Footer />
    </>
  );
}

export default ExploreFoods;
