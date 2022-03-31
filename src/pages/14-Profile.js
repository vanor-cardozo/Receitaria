import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';

function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user')) || '';
  return (
    <>
      <HeaderWithoutSearchButton title="Profile" />
      <h1>Profile</h1>
      <p>{ email }</p>
      <Footer />
    </>
  );
}

export default Profile;
