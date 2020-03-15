import React from 'react';
import PropTypes from 'prop-types';
import { ChatListItem } from '../ChatListItem/ChatListItem.jsx'

import './Chatlist.css'

export const ChatList = ({chats}) => {
    return <form className="chatlist__form">
        {chats.map((item, index) => <ChatListItem item={item} index={index} key={index}/>)}
    </form> 
}

ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.object).isRequired
}