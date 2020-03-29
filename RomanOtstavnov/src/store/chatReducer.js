import { handleActions } from 'redux-actions';
import {initChats, addMessage, addChat, success, request, failure, fire, unFire} from './chatActions';

const initialState = {
    isLoaded: false,
    error: null,
    items: [],
};

export default handleActions({
    [initChats]: (store, action) => {},
    [request]: (store, action) => {
        return {
            ...store,
            isLoaded: true,
        };
    },
    [failure]: (store, action) => {
        console.error(action.payload);
        return {
            ...store,
            isLoaded: false,
            error: action.payload,
        };
    },
    [success]: (store, action) => ({
        ...store,
        items: [...store.items, ...action.payload],
        isLoaded: false,
    }),
    [addMessage]: (store, action) => {
        const {chatId, name, content, type} = action.payload;
        return {
            ...store,
            items: store.items.map(({id, messages, ...otherProps}) => ({
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
            items: [...store.items, {
                id,
                name,
                messages: [],
            }]
        };
    },
    [fire]: (store, action) => {
        const { chatId } = action.payload;
        return {
            ...store,
            items: store.items.map(({id, fire, ...otherProps}) => ({
                ...otherProps,
                id,
                fire: id === chatId ? true : fire,
            }))
        };
    },
    [unFire]: (store, action) => {
        const { chatId } = action.payload;
        return {
            ...store,
            items: store.items.map(({id, fire, ...otherProps}) => ({
                ...otherProps,
                id,
                fire: id === chatId ? false : fire,
            }))
        };
    }
}, initialState)
