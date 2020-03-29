import styles from './app.scss';
import classnames from 'classnames/bind';
import React from 'react';
import {Switch, Route} from "react-router-dom";
import {initStore, history} from "./store";
import {initChats} from "./store/chatActions";
import {profileInit} from "./store/profileActions";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import HeaderContainer from "./containers/HeaderContainer";
import ChatContainer from "./containers/ChatContainer";
import ProfileContainer from "./containers/ProfileContainer";

const cx = classnames.bind(styles);

const store = initStore();
store.dispatch(initChats());
store.dispatch(profileInit('vatokato'));

export const App = () => (
  <Provider store={store}>
    <div className={cx('wrapper')}>
      <ConnectedRouter history={history}>
        <HeaderContainer />
        <div className={cx('content')}>
          <Switch>
            <Route path="/" exact>It's index page</Route>
            <Route path="/chats" exact component={ChatContainer} />
            <Route path="/chats/:id" component={ChatContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/">It's 404 page. Not found.</Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </div>
  </Provider>
);

export default App;
