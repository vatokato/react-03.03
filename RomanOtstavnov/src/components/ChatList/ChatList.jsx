import styles from './chat-list.scss';
import classnames from 'classnames/bind';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Box} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import isFunction from 'lodash/isFunction';
import TextField from "@material-ui/core/TextField";
import {useInput} from "../../hooks/useInput";

const cx = classnames.bind(styles);

export const ChatList = ({
                           activeChatId,
                           items,
                           containerClassName,
                           addChat,
                           changeChat,
                         }) => {
  const [chatName, setChatName, clearChatName] = useInput('');

  const sendForm = (e) => {
    e.preventDefault();
    if(chatName){
      isFunction(addChat) && addChat(chatName);
      clearChatName();
    }
  };

  return (
    items &&
      <Box py={1} px={2} className={cx('container', containerClassName)}>
        <List>
          {items.map(({name, id}, index) => (
            <ListItem
              key={index}
              onClick={() => changeChat(id)}
              className={cx(
                'link',
                {'active': id === activeChatId}
              )}
            >
              {name}
            </ListItem>
          ))}
          <ListItem>
            <form
              className={cx('form')}
              onSubmit={sendForm}
            >
              <TextField
                label='Добавить чат'
                variant='outlined'
                name='chatName'
                type='text'
                value={chatName}
                onChange={setChatName}
                autoComplete='off'
                size='small'
              />
            </form>
          </ListItem>
        </List>
      </Box>
  );
};

export default ChatList;
