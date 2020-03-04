import React from 'react';

export default function Message({ author, text }) {
  return (
    <li className="content__message">
      <strong>{author.replace(/[a-zа-яё]/i, author[0].toUpperCase())}</strong>: {text}
    </li>
  );
}
