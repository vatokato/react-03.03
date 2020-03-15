import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat.jsx';
import { ChatList } from '../components/ChatList/ChatList.jsx'

import './ChatContainer.css'

export const ROBOT = 'Robot'

export class ChatContainer extends Component {
    state = {
        messages: [
            { user: "Ivan", text: "Hello, world!" },
            { user: "Petr", text: "Helo, how are you?" },
            { user: "Ivan", text: "I'm well" },
        ],
        chats: [
            { name: "IT Group"},
            { name: "Bot Group"},
            { name: "Never read this"}
        ],
        timeoutID: 0
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        window.clearTimeout(this.timeoutID)

        if(lastMessage.user != ROBOT) {
            this.timeoutID = setTimeout(() => this.handleSendMessage({
                user: ROBOT,
                text: `Hello, ${lastMessage.user}! Bot is busy, it will answer soon...`,
            }), 10000);
        }
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({
            messages: [...state.messages, message]
        }));
    }

    render() {
        return (
        <div className="chatcontainer"> 
            <ChatList chats={this.state.chats}/>
            <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage}/>
        </div>)
    }
}