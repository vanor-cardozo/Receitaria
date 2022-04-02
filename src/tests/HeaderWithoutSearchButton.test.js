import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import HeaderWithoutSearchButton from '../components/HeaderWithoutSearchButton';

const profileSearch = 'profile-top-btn';
const pageTitle = 'page-title';

describe('Teste o componente <Header />', () => {
  test('Tem os data-testids profile-top-btn e page-title', () => {
    renderWithRouter(<HeaderWithoutSearchButton />);
    const profileBtnId = screen.getByTestId(profileSearch);
    const pageTitleId = screen.getByTestId(pageTitle);

    expect(profileBtnId && pageTitleId).toBeInTheDocument();
  });

  test('Possui ícone para a tela de perfil', () => {
    renderWithRouter(<HeaderWithoutSearchButton />);
    const profileIcon = screen.getByAltText('profile');
    expect(profileIcon).toBeInTheDocument();
  });

  test('Ao clicar no botão de perfil redireciona para a página de perfil.', () => {
    const { history } = renderWithRouter(<HeaderWithoutSearchButton />);
    const profileBtnId = screen.getByTestId(profileSearch);
    userEvent.click(profileBtnId);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
});
