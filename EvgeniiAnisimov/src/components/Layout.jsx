import React from 'react';
import PropTypes from 'prop-types';
import { ChatContainer } from '../containers/ChatContainer';
import { ChatList } from '../components/ChatList/ChatList';
import Header from './Header';
import './Layout.css'

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return(
      <div className="layout">
        <Header chatId={ this.props.chatId } />
        <div className="layout-canvas">
          <div className="layout-left-side">
            <ChatList />
          </div>
          <div className="layout-right-side">
            Test
          </div>
        </div>
      </div>
    )
  }
}
