import React from "react";
import PropTypes from 'prop-types';
import {MessageList} from '../MessageList/MessageList.jsx';
import {Message} from '../Message/Message.jsx'
import {ChatForm} from '../ChatForm/ChatForm.jsx';

import './Chat.css'

export const Chat = ({messages, onSendMessage}) => {
    return (<div className="chat">
        <MessageList messages={messages}/>
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}