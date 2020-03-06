import React from 'react';
import MessageList from './components/MessageList';
import FormForUser from './components/FormForUser';

export default class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { author: 'Bob', text: 'Take it easy!' },
        { author: 'Peter', text: 'Take us home!' },
        { author: 'John Lydon', text: 'God save the Queen!' }
      ]
    };

    this.updateMessagesList = this.updateMessagesList.bind(this);
  }

  updateMessagesList(message) {
    const array = [...this.state.messages, message];

    this.setState({ messages: array });
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="main">
        <h1 className="main__title">Chat with People</h1>
        <div className="content">
          <MessageList messages={messages} />
          <SendForm updateMessagesList={this.updateMessagesList} />
        </div>
      </div>
    );
  }
}
