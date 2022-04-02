import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Login from '../pages/1-Login';

describe('Teste o componente <Login />', () => {
  test('Teste se a página contém as informações de Login', () => {
    renderWithRouter(<Login />);
    const p1 = screen.getByText(/email/i);
    const p2 = screen.getByText(/senha/i);
    expect(p1 && p2).toBeInTheDocument();
  });

  test('Teste se a página contém um heading h4 com o texto Email e Senha', () => {
    renderWithRouter(<Login />);
    const emailEl = screen.getByRole('heading', { name: /email/i, level: 4 });
    const passwordEl = screen.getByRole('heading', { name: /senha/i, level: 4 });
    expect(emailEl && passwordEl).toBeInTheDocument();
  });

  test('Teste se a página contém um input com o Email e Senha', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    expect(emailInput && passwordInput).toBeInTheDocument();
  });

  test('O botão deve conter o texto Entrar', () => {
    renderWithRouter(<Login />);
    const buttonEl = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonEl).toBeInTheDocument();
  });

  test('Ao clicar no botão Entrar redireciona para a página de receitas.', () => {
    const { history } = renderWithRouter(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const buttonEl = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'email@mail.com');
    expect(emailInput).toHaveValue('email@mail.com');
    userEvent.type(passwordInput, '1234567');
    expect(passwordInput).toHaveValue('1234567');
    userEvent.click(buttonEl);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
