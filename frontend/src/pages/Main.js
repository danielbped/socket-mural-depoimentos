import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MessageCard from '../components/MessageCard';
import socket from '../utils/socket';

const handleMessage = ({ user, name, message }) => {
  if (message !== '') return socket.emit('sendDepoiment', { user, name, message })
};

const Main = () => {
  const { user } = useParams();
  const [name, setName] = useState('Anônimo')
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);

  const depoiment = { user, name, message };

  useEffect(() => {
    fetch(`http://localhost:3001/depoimentos/${ user }`)
      .then(res => res.json())
      .then((depoiments) => {
        setLoading(false);
        setMessages(depoiments);
      })
  }, [user, messages])

  if (loading) return <p>Carregando...</p>

  return (
    <main className="h-screen flex flex-col items-center">
      <h1 className="m-6">Perfil de { user }</h1>

      {
      !messages ? 
        <p className="text-center">
          Seja o primeiro a escrever uma mensagem para { user }
        </p> :
        <div className="w-2/3">
          { messages.map(({ name, message, _id }) => <MessageCard key={_id} name={ name } message={ message } />) }
        </div>
      }

      <form method="POST" className="flex flex-col">
        <input
          placeholder="Nome"
          onChange={ ({ target: { value } }) => setName(value || 'Anônimo') }
          className="my-3 w-full py-2 px-2"
        />
        <textarea
          type="text"
          placeholder="Mensagem"
          onChange={ ({ target: { value } }) => setMessage(value) }
          className="my-3 w-full py-6 px-2"
        />
        <button
          type="button"
          onClick={() => handleMessage(depoiment)}
        >
          Enviar
        </button>
      </form>
    </main>
  );
};

export default Main;