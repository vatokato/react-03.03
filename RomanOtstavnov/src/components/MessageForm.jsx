import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';

export class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.handleMessageField = this.handleMessageField.bind(this);
    this.handleNameField = this.handleNameField.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  state = {
    name: '',
    message: '',
  };

  sendForm (e) {
    e.preventDefault();
    const { name, message: content } = this.state;
    const { setMessage } = this.props;
    if(name && content && isFunction(setMessage)) {
      setMessage({ name, content });
      this.setState({ message: '' });
    }
  };

  handleNameField (e) {
    e.preventDefault();
    const { value: name } = e.target;
    this.setState({ name });
  };

  handleMessageField (e) {
    e.preventDefault();
    const { value: message } = e.target;
    this.setState({ message });
  }

  render () {
    const { name, message } = this.state;
    return (
      <form
        className='message-form'
        onSubmit={this.sendForm}
      >
        <input
          name='name'
          onChange={this.handleNameField}
          type="text" value={name}
          placeholder='Имя'
        />
        <input
          name='message'
          onChange={this.handleMessageField}
          type="text"
          value={message}
          placeholder='Сообщение'
        />
        <input type="submit" value='Отправить' />
      </form>
    )
  };
};

export default MessageForm;