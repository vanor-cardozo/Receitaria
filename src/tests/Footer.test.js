import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Footer from '../components/Footer';

describe('Teste o componente <Footer />', () => {
  test('Verifica se existe o elemento footer', () => {
    renderWithRouter(<Footer />);
    const footerId = screen.getByTestId('footer');
    expect(footerId).toBeInTheDocument();
  });

  test('Implemente os elementos do menu inferior respeitando os atributos', () => {
    renderWithRouter(<Footer />);
    const drinksId = screen.getByTestId('drinks-bottom-btn');
    const exploreId = screen.getByTestId('explore-bottom-btn');
    const foodId = screen.getByTestId('food-bottom-btn');
    expect(drinksId && exploreId && foodId).toBeInTheDocument();
  });

  test('Possui os ícones', () => {
    renderWithRouter(<Footer />);
    const drinkIcon = screen.getByAltText('go to drinks');
    const exploreIcon = screen.getByAltText('go to explore');
    const foodIcon = screen.getByAltText('go to foods');
    expect(drinkIcon && exploreIcon && foodIcon).toBeInTheDocument();
  });

  test('Ao clicar no botão de drinks redireciona para a página de drinks.', () => {
    const { history } = renderWithRouter(<Footer />);
    const drinkBtnId = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinkBtnId);
    const { pathname } = history.location;
    expect(pathname).toBe('/drinks');
  });

  test('Ao clicar no botão de explorar redireciona para a página de explorar.', () => {
    const { history } = renderWithRouter(<Footer />);
    const exploreBtnId = screen.getByTestId('explore-bottom-btn');
    userEvent.click(exploreBtnId);
    const { pathname } = history.location;
    expect(pathname).toBe('/explore');
  });

  test('Ao clicar no botão de perfil redireciona para a página de perfil.', () => {
    const { history } = renderWithRouter(<Footer />);
    const foodBtnId = screen.getByTestId('food-bottom-btn');
    userEvent.click(foodBtnId);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
