import styles from './app.scss';
import classnames from 'classnames/bind';
import React from 'react';
import {Switch, Route} from "react-router-dom";
import {initStore, history} from "./store";
import {initChats} from "./store/chatActions";
import {init as initProfile} from "./store/profileActions";
import {Provider} from "react-redux";
import HeaderContainer from "./containers/HeaderContainer";
import ChatContainer from "./containers/ChatContainer";
import {ConnectedRouter} from "connected-react-router";

const cx = classnames.bind(styles);

const store = initStore();
store.dispatch(initChats());
store.dispatch(initProfile({name: 'Roman Ot', city: 'Ekaterinburg'}));

export const App = () => (
  <Provider store={store}>
    <div className={cx('wrapper')}>
      <ConnectedRouter history={history}>
        <HeaderContainer />
        <Switch>
          <Route path="/" exact>It's index page</Route>
          <Route path="/chats" exact component={ChatContainer} />
          <Route path="/chats/:id" component={ChatContainer} />
          <Route path="/profile">It's profile page</Route>
          <Route path="/">It's 404 page. Not found.</Route>
        </Switch>
      </ConnectedRouter>
    </div>
  </Provider>
);

export default App;
