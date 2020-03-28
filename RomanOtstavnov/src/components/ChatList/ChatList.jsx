import styles from './chat-list.scss';
import classnames from 'classnames/bind';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Box} from "@material-ui/core";
import isFunction from 'lodash/isFunction';
import TextField from "@material-ui/core/TextField";
import {useInput} from "../../hooks/useInput";
import CircularProgress from "@material-ui/core/CircularProgress";

const cx = classnames.bind(styles);

export const ChatList = ({
  activeChatId,
  items,
  containerClassName,
  addChat,
  changeChat,
  isLoaded,
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
          {isLoaded
            ? (
              <div className={cx('spinner')}>
                <CircularProgress />
              </div>
            ) : (
              items.map(({name, id, fire}, index) => (
                <ListItem
                  key={index}
                  onClick={() => changeChat(id)}
                  className={cx(
                    'link',
                    {
                      'active': id === activeChatId,
                      'fire': fire,
                    }
                  )}
                >
                  {name}
                </ListItem>
              ))
            )
          }
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
