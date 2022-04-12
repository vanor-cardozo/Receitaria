import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';
import OptionsFoods from '../components/OptionsFoods';

function ExploreFoods() {
  return (
    <>
      <HeaderWithoutSearchButton title="Explore Foods" />
      <OptionsFoods />
      <Footer />
    </>
  );
}

export default ExploreFoods;
