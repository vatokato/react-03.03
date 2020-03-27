import React from 'react';
import Bot from '../bots/aiprojectBot';
import {MESSAGE_TYPE} from "../constants";
import get from 'lodash/get';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addMessage} from "../store/chatActions";
import Chat from '../components/Chat/Chat';

const bot = new Bot();

const mapStateToProps = ({ chat }, props) => {
  const { chats = [] } = chat;
  const activeChatId =  parseInt(get(props, 'match.params.id', 0));
  const activeChat = chats.find(item => item.id === activeChatId);
  return {
    activeChatId,
    messages: activeChat && activeChat.messages || [],
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addMessage,
}, dispatch);

const mergeProps = ({
  activeChatId,
  messages,
}, {
  addMessage: addMessageDispatch,
}) => {

  const addMessage = ({name, content}) => {
    addMessageDispatch(activeChatId, name, content);
  };

  return {
    activeChatId,
    messages,
    addMessage,
  }
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
