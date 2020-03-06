import React from 'react';
import Message from "./message.jsx";

class MessageList extends React.Component {
    render() {
        return (
            <ul>
                { this.props.messages.map(message => <Message {...message} key={message.id}/>) }
            </ul>);
    }
}


export default MessageList;