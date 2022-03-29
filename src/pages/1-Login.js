import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import localStorageLogin from '../services/localStorage';

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
    <form>
      <h4> Email: </h4>
      <input
        type="email"
        name="email"
        placeholder="email@email.com"
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <h4> Senha: </h4>
      <input
        type="password"
        name="password"
        placeholder="A senha deve ter 6 dígitos"
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
