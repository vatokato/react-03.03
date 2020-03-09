import React, { Component, Fragment } from 'react';
import Message from './Message';
import SendForm from './SendForm';
import { textCapitalize } from './common/textUtils';

export default class MessageField extends Component {
  state = {
    messages: [
      { author: 'Ivan', text: 'Hi Guys' },
      { author: 'Stephan', text: 'Hiya' },
      { author: 'Alex', text: 'Do you wanna chat with?' }
    ]
  };
  robotText = { before: 'Hi ', after: ', i am your personal assistent' };

  updateMessagesList = message => {
    this.setState(state => ({ messages: [...state.messages, message] }));
  };

  componentDidUpdate() {
    const { messages } = this.state;
    const lastMessage = messages[messages.length - 1];

    if (lastMessage.authorAccess !== 'bot') {
      this.updateMessagesList({
        author: 'robot',
        text: `${this.robotText.before}${textCapitalize(lastMessage.author)}${this.robotText.after}`,
        authorAccess: 'bot'
      });
    }
  }

  render() {
    const { messages } = this.state;

    return (
      <Fragment>
        <ul className="content__messages">
          {messages.map((message, i) => (
            <Message {...message} key={i} />
          ))}
        </ul>
        <SendForm updateMessagesList={this.updateMessagesList} />
      </Fragment>
    );
  }
}
