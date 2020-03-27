import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import profileReducer from "./profileReducer";
import ReduxThunk from "redux-thunk";
import {connectRouter, routerMiddleware} from "connected-react-router";
import chatMiddleware from "./chatMiddleware";
import {createBrowserHistory} from "history";
import botMiddleware from "./botMiddleware";

export const history = createBrowserHistory();

const reducer = combineReducers({
  chat: chatReducer,
  profile: profileReducer,
  router: connectRouter(history),
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore (preloadedState = undefined) {
    return createStore(
      reducer,
      preloadedState,
      composeEnhancers(applyMiddleware(
        ReduxThunk,
        routerMiddleware(history),
        botMiddleware,
        chatMiddleware
      ))
    )
}
