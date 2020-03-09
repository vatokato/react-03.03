import React, { Component } from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

const externalAi = {
  name: 'AI',
  messages: [
    'Неплохая попытка, %name%',
    '%name%, полегче',
    'Мне кажется, что ты преувеличиваешь',
    '%name%, я тебя не понимаю',
  ],
  getAnswer: ({ name }) => {
    const randIndex = Math.floor(Math.random() * externalAi.messages.length);
    return externalAi.messages[randIndex].replace('%name%', name);
  }
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      ai: externalAi,
    };

    this.setMessage = this.setMessage.bind(this);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json')
      .then(result => result.json())
      .then(messages => this.setState({ messages }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { messages, ai } = this.state;
    const lastMessage = messages[messages.length - 1];
    if(lastMessage.name !== ai.name) {
      this.setMessage({
        name: ai.name,
        content: ai.getAnswer(lastMessage)
      });
    }

  }

  setMessage (message) {
    this.setState(state => ({
      messages: [...state.messages, message],
    }));
  }

  render () {
    const { messages } = this.state;
    return (
      <div className='container'>
        <MessageList messages={messages} />
        <MessageForm setMessage={this.setMessage} />
      </div>
    );
  }
};

export default App;