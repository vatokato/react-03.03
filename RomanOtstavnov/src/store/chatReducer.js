import { handleActions } from 'redux-actions';
import { initChats, addMessage, addChat, loadData } from './chatActions';

const initialState = {};

export default handleActions({
    [initChats]: (store, action) => {
        return {
            chats: []
        };
    },
    [loadData]: (store, action) => {
        const {chats} = action.payload;
        return {
            ...store,
            chats: chats
        };
    },
    [addMessage]: (store, action) => {
        const {chatId, name, content, type} = action.payload;
        return {
            ...store,
            chats: store.chats.map(({id, messages, ...otherProps}) => ({
                ...otherProps,
                id,
                messages: id === chatId ? [...messages, {name, content, type}] : messages,
            }))
        };
    },
    [addChat]: (store, action) => {
        const {name, id} = action.payload;
        return {
            ...store,
            chats: [...store.chats, {
                id,
                name,
                messages: [],
            }]
        };
    }
}, initialState)
