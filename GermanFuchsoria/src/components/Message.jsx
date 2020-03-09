import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { textCapitalize } from './common/textUtils';

export default class Message extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { author, text } = this.props;

    return (
      <li className="content__message">
        <strong>{textCapitalize(author)}</strong>: {text}
      </li>
    );
  }
}
