import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <div>
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
      </div>
    </form>
  )
}

export default Login;