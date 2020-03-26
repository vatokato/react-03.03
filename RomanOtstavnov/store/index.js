import {createStore, combineReducers, compose} from 'redux';
import chatReducer from './chatReducer';
import profileReducer from "./profileReducer";

const reducer = combineReducers({
    chat: chatReducer,
    profile: profileReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore (preloadedState = undefined) {
    return createStore(
      reducer,
      preloadedState,
      composeEnhancers()
    )
}
