import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Header from '../components/Header';

const profileSearch = 'profile-top-btn';
const buttonSearch = 'search-top-btn';
const pageTitle = 'page-title';

describe('Teste o componente <Header />', () => {
  test('Tem os data-testids profile-top-btn, page-title e search-top-btn', () => {
    renderWithRouter(<Header />);
    const profileBtnId = screen.getByTestId(profileSearch);
    const searchBtnId = screen.getByTestId(buttonSearch);
    const pageTitleId = screen.getByTestId(pageTitle);

    expect(profileBtnId && searchBtnId && pageTitleId).toBeInTheDocument();
  });

  test('Possui ícone para a tela de perfil e um para a busca', () => {
    renderWithRouter(<Header />);
    const profileIcon = screen.getByAltText('profile');
    const searchIcon = screen.getByAltText('search');
    expect(profileIcon && searchIcon).toBeInTheDocument();
  });

  test('Ao clicar no botão de perfil redireciona para a página de perfil.', () => {
    const { history } = renderWithRouter(<Header />);
    const profileBtnId = screen.getByTestId(profileSearch);
    userEvent.click(profileBtnId);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });

  test('Ao clicar no botão de pesquisa habilita input de pesquisa.', () => {
    renderWithRouter(<Header />);
    const searchBtnId = screen.getByTestId(buttonSearch);
    userEvent.click(searchBtnId);
    const formId = screen.getByTestId('form-add-input');
    fireEvent.submit(formId);
    const inputId = screen.getByTestId('search-input');
    const ingredientInputId = screen.getByTestId('ingredient-search-radio');
    const nameInputId = screen.getByTestId('name-search-radio');
    const firstLetterInputId = screen.getByTestId('first-letter-search-radio');
    const excSearchBtnId = screen.getByTestId('exec-search-btn');
    expect(inputId && ingredientInputId
      && nameInputId && firstLetterInputId && excSearchBtnId).toBeInTheDocument();
  });
});
