import {createActions} from 'redux-actions';

export const {
    initChats,
    loadData,
    addMessage,
    addChat,
    changeChat,
} = createActions({
    INIT_CHATS: () => ({}),
    LOAD_DATA: (chats) => ({chats}),
    ADD_MESSAGE: (chatId, name, content, type) => ({chatId, name, content, type}),
    ADD_CHAT: (id, name) => ({id, name}),
    CHANGE_CHAT: (id) => ({id}),
});
