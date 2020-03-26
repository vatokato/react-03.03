import React from 'react';
import get from 'lodash/get';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addChat} from "../../store/chatActions";
import ChatList from "../components/ChatList/ChatList";

const mapStateToProps = ({chat}, props) => {
  const {chats: items = []} = chat;
  return {
    ...props,
    chatId: parseInt(get(props, 'match.params.id', 0)),
    items,
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addChat,
}, dispatch);

const mergeProps = ({
  chatId, items,
}, {
  addChat: addChatDispatch,
}) => {

  return {
    items,
    chatId: items.some(item => item.id === chatId) ? chatId : false,
    addChat: ({name}) => addChatDispatch(name),
  }
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);
