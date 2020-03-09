import React from "react";
import ReactDOM from "react-dom";
import { Message } from './message.js'

export const MessageList = ({messages}) => {
    return (<ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>);
}

