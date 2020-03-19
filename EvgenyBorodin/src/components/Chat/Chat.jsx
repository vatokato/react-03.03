import React from "react";
import PropTypes from 'prop-types';
import {MessageList} from '../MessageList/MessageList.jsx';
import {Message} from '../Message/Message.jsx'
import {ChatForm} from '../ChatForm/ChatForm.jsx';

import './Chat.css'

export const Chat = ({messages, onSendMessage}) => {
    if (messages) {
        return (<div className="chat">
            {messages.length ? <MessageList messages={messages}/> : "Нет сообщений" }
            <ChatForm onSendMessage={onSendMessage}/>
        </div>);
    } else {
        return (<div className="chat">
            <strong>Выберите чат в списке.</strong>
        </div>)
    }
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}