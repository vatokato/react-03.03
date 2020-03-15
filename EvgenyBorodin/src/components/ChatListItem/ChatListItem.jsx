import React from "react";

import './ChatListItem.css'

export const ChatListItem = ({item, index}) => {
    return <span><input type="radio" name="chatlistitem" id={"chatlistitem" + index}/><label htmlFor={"chatlistitem" + index}>{item.name}</label></span>
}