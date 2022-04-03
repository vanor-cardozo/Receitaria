import React from 'react';
import FavoriteButtonDrinks from '../components/FavoriteButtonDrinks';
import ShareButton from '../components/ShareButton';

function DrinksInProgress() {
  return (
    <section>
      <ShareButton />
      <FavoriteButtonDrinks />
    </section>
  );
}

export default DrinksInProgress;
