import React from 'react';
import Message from './Message';

export default function MessageList({ messages }) {
  return (
    <ul className="content__messages">
      {messages.map((message, i) => (
        <Message {...message} key={i} />
      ))}
    </ul>
  );
}
