import {createActions} from 'redux-actions';

export const {
    request,
    success,
    failure,
    initChats,
    addMessage,
    addChat,
    changeChat,
    fire,
    unFire,
} = createActions({
    REQUEST: () => ({}),
    SUCCESS: () => (items) => ({items}),
    FAILURE: error => ({error}),
    INIT_CHATS: () => ({}),
    ADD_MESSAGE: (chatId, name, content, type) => ({chatId, name, content, type}),
    ADD_CHAT: (id, name) => ({id, name}),
    CHANGE_CHAT: (id) => ({id}),
    FIRE: chatId => ({chatId}),
    UN_FIRE: chatId => ({chatId}),
});
