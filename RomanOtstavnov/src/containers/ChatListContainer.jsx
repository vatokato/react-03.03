import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addChat, changeChat} from "../store/chatActions";
import ChatList from "../components/ChatList/ChatList";

const mapStateToProps = ({chat, router}, props) => {
  const { chats: items = [] } = chat;
  const { chatId: activeChatId } = router.location.state || {};

  return {
    ...props,
    activeChatId,
    items,
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addChat: name => addChat(Date.now(), name),
  changeChat: id => changeChat(id),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
