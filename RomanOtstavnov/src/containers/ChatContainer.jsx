import React from 'react';
import get from 'lodash/get';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addMessage} from "../store/chatActions";
import Chat from '../components/Chat/Chat';

const mapStateToProps = ({ chat }, props) => {
  const { items = [] } = chat;
  const activeChatId =  parseInt(get(props, 'match.params.id', 0));
  const activeChat = items.find(item => item.id === activeChatId);
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
  addMessage,
}) => {
  return {
    activeChatId,
    messages,
    addMessage: ({name, content}) => addMessage(activeChatId, name, content),
  }
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
