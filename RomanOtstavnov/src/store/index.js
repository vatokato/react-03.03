import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import profileReducer from "./profileReducer";
import ReduxThunk from "redux-thunk";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import chatMiddleware from "./chatMiddleware";
import botMiddleware from "./botMiddleware";
import profileMiddleware from "./profileMiddleware";
import {apiMiddleware} from "redux-api-middleware";

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
        apiMiddleware,
        routerMiddleware(history),
        botMiddleware,
        chatMiddleware,
        profileMiddleware
      ))
    )
}
