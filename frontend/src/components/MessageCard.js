import React from 'react';

const MessageCard = ({ name, message, _id }) => {
  return (
    <div key={ _id }>
      <p>De: { name }</p>
      <span>{ message }</span>
    </div>
  );
};

export default MessageCard;