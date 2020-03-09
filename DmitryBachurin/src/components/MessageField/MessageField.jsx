import React, { Component } from 'react';
import {Message} from './Message/Message'

export default class MessegeField extends Component {
    state = {
        messages: [
            { name: "Ivan", content: "Hello, world!" },
            { name: "Petr", content: "Helo, how are you?" },
            { name: "Ivan", content: "I'm well" },
        ]
    }
    render() {
        const { state: { messages } } = this;
        return (

            <ul>
                {messages.map((item, index) => <Message {...item} key={index} />)}
            </ul>
        )
    }
}