import {createStore, combineReducers} from 'redux';
import chatReducer from './chatReducer';

const reducer = combineReducers({
    chat: chatReducer
});

export function initStore (preloadedState = undefined) {
    return createStore(reducer, preloadedState)
}
