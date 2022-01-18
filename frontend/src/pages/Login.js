import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  return (
    <form className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center border border-solid rounded-3xl color: bg-green-500 border-green-700 px-16 py-32 -mt-20">
        <input
          type="text"
          placeholder="Insira o seu nome de usuário"
          name="name"
          onChange={ ({ target: { value } }) => setName(value) }
          className="m-6 p-4 border rounded-2xl"
        />
        <Link to={ `/depoimentos/${name}` }>
          <button className="text-green-900">
            Entrar
          </button>
        </Link>
      </div>
    </form>
  )
}

export default Login;