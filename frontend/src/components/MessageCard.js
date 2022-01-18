import React from 'react';

const MessageCard = ({ name, message, _id }) => {
  return (
    <div key={ _id } className="flex flex-col border border-solid rounded-3xl border-green-700 py-8 px-4 my-6">
      <p className="m-2">De: { name }</p>
      <span>{ message }</span>
    </div>
  );
};

export default MessageCard;