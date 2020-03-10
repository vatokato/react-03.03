import React, { Component } from 'react';
import Message from '../Message/Message';
export class MessageList extends Component {
    constructor (props) {
        super (props)
    this.state = {
            messages: [
                { body: 'Hello', author: null },
                { body: 'What is up?', author: null }
            ]
        }
    }
    componentDidUpdate() {
        let msgs = this.state.messages;
        if (msgs.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, { body: 'Ваш звонок очень важен для нас', author: 'It Robot' }]
                });
            }, 1000);
        }
    }

    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, { body: 'Нормально' }]
        });
    };
    render() {
        let { user } = this.props;
        let { messages } = this.state;
        let MessageArr = messages.map(message => <Message msg={{
            usrName: message.author ? message.author : user,
            msgBody: message.body
        }} />)

        return (<div className="msg-wrapper">
            <h2>WhatsAcct</h2>
            {MessageArr}
            <button onClick={this.sendMessage}>Send</button>
        </div>
        )
    }
}
