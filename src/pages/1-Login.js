// import React from 'react';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isDisabled, setIsDisabled] = useState(true);

  handleChange = ({ target: { value, name } }) => {
     setEmail({ value });
     setPassword({ value });
   };

  // validateForm = () => {
  //   const PASSWORD_MIN_LENGTH = 6;
  //   const regexEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  //   const isEmailValid = regexEmail.test(String(email).toLowerCase());
  //   const isButtonValid = isEmailValid && PASSWORD_MIN_LENGTH >= isPasswordLengthValid;
  //   return !isButtonValid;
  // };

  return (
    <form>
      <h4> Email: </h4>
      <input
        type="email"
        name="email"
        placeholder="email@email.com"
        data-testid="email-input"
        value={ email }
        onChange={ () => setEmail(target.value) }
      />
      <h4> Senha: </h4>
      <input
        type="password"
        name="password"
        placeholder="A senha deve ter 6 dígitos"
        data-testid="password-input"
        value={ password }
        onChange={ () => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        // disabled={ validateForm }
        // onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
