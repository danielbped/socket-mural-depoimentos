import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MessageCard from '../components/MessageCard';
import socket from '../utils/socket';

const handleMessage = ({ user, name, message }) => {
  socket.emit('sendDepoiment', { user, name, message })
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
    <main>
      <h1>Perfil de { user }</h1>

      <div>
        { messages.map(({ name, message, _id }) => <MessageCard key={_id} name={ name } message={ message } />) }
      </div>

      <form method="POST">
        <input
          placeholder="Nome"
          onChange={ ({ target: { value } }) => setName(value || 'Anônimo') }
        />
        <textarea
          type="text"
          onChange={ ({ target: { value } }) => setMessage(value) }
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