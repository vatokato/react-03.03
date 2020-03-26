import styles from './chat.scss';
import classnames from 'classnames/bind';
import React, { useRef }  from 'react';
import MessageForm from "../../components/MessageForm/MessageForm";
import MessageList from "../../components/MessageList/MessageList";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ChatListContainer from "../../containers/ChatListContainer";

const cx = classnames.bind(styles);

export const Chat = ({
  activeChatId,
  messages,
  addMessage,
}) => {
  const messageListRef = useRef();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <ChatListContainer className={cx('chat-list')} />

        <Box py={1} px={2} className={cx('message-field')} ref={messageListRef}>
          {messages
            ?(
              <MessageList messages={messages} containerRef={messageListRef} />
            ) : (
              <Typography>{activeChatId ? 'Сообщений нет' : 'Выберите чат'}</Typography>
            )
          }
        </Box>
      </div>
      <div className={cx('footer')}>
        {Boolean(activeChatId) && <MessageForm addMessage={addMessage} />}
      </div>
    </div>
  );
};

export default Chat;
