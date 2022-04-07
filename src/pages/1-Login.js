import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import localStorageLogin from '../services/localStorage';
import { Banner, Form, Container, Image } from '../css/Login';
import '../App.css';
import logo from '../images/logo.png';
import header from '../images/header.png';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const PASSWORD_MIN_LENGTH = 6;
    const regexEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isEmailValid = regexEmail.test(String(email).toLowerCase());
    const isButtonValid = isEmailValid && PASSWORD_MIN_LENGTH < password.length;
    if (isButtonValid) return setIsDisabled(false);
    return setIsDisabled(true);
  }, [email, password]);

  function handleClick() {
    localStorageLogin({ email });
    history.push('foods');
  }

  return (
    <Container>
      <Banner>
        <img src={ header } alt="header receitaria" />
      </Banner>
      <Form>
        <p>
          Bem vindo(a) ao nosso app de receitas,
          insira seu email e senha para fazer o login.
          <br />
          <br />
          Bom apetite!
        </p>
        <input
          type="email"
          name="email"
          placeholder="email"
          data-testid="email-input"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          data-testid="password-input"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          ENTRAR
        </button>
        <Image src={ logo } alt="logo receitaria" />

      </Form>
    </Container>
  );
}

export default Login;
