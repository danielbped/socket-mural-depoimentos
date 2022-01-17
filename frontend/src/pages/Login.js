import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <input
        type="text"
        placeholder="Insira o seu nome de usuário"
        name="name"
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <Link to={ `/depoimentos/${name}` }>
        <button>
          Entrar
        </button>
      </Link>
    </form>
  )
}

export default Login;