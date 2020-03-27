import styles from './message-form.scss';
import classnames from 'classnames/bind';
import React, { useState, useEffect, useRef } from 'react';
import isFunction from 'lodash/isFunction';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from "@material-ui/core/InputAdornment";
import SendIcon from "@material-ui/icons/Send";
import MessageIcon from '@material-ui/icons/Message';
import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab";
import {useInput} from "../../hooks/useInput";

const cx = classnames.bind(styles);

export const MessageForm = ({ addMessage }) => {
  const [name, setName] = useInput('');
  const [content, setContent, clearInput] = useInput('');
  const [nameSaved, setNameSaved] = useState(false);

  const messageField = useRef();

  useEffect(() => {
    messageField.current.focus();
  }, []);

  const sendForm = (e) => {
    e.preventDefault();
    if(name && content && isFunction(addMessage)) {
      addMessage({ name, content });
      clearInput();
      setNameSaved(true);
      messageField.current.focus();
    }
  };

  return (
    <form
      className={cx('container')}
      onSubmit={sendForm}
    >
      <Box my={2}>
        {nameSaved
          ? (
            <div className={cx('name')}>
              <strong>{name}</strong>
              <EditIcon
                className={cx('name-edit-button')}
                onClick={() => setNameSaved(false)}
                fontSize='small'
              />
            </div>
          ) : (
            <TextField
              type='text'
              label='Имя'
              variant='outlined'
              name='name'
              value={name}
              onChange={setName}
              autoComplete='off'
              size='small'
              InputProps={{
                style: {
                  background: '#fff'
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color='primary' />
                  </InputAdornment>
                ),
              }}
            />
          )
        }
      </Box>
      <Box my={2} className={cx('message-line')}>
        <TextField
          type='text'
          className={cx('message')}
          label='Сообщение'
          variant='outlined'
          name='message'
          value={content}
          size='small'
          onChange={setContent}
          autoComplete='off'
          inputRef={messageField}
          InputProps={{
            style: {
              background: '#fff'
            },
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon color='primary' />
              </InputAdornment>
            ),
          }}
        />

        <Fab
          aria-label="delete"
          color='primary'
          type="submit"
          size='small'
          disabled={!(name && content)}
        >
          <SendIcon />
        </Fab>
      </Box>
    </form>
  )
};

export default MessageForm;
