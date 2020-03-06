import React from 'react';

export default function Message({ author, text, textCapitalize }) {
  return (
    <li className="content__message">
      <strong>{textCapitalize(author)}</strong>: {text}
    </li>
  );
}
