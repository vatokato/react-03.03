import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
// import { MessageList } from './components/MessageList/MessageList.jsx'
import { ChatContainer } from './containers/ChatContainer.jsx'

import './App.css'

export const App = () => {
    return (
        <>
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <h1>Main page</h1>
                    <Link to="/chats">Мессенджер</Link>
                </Route>
                <Route exact path="/chats" component={ChatContainer} />
                <Route exact path="/chats/:id" component={ChatContainer} />
                <Route exact path="/about">
                    <h1>It's about page</h1>
                    <Link to="/chats">Мессенджер</Link>
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}

// export class App extends Component {
//     state = {
//         messages: []
//     }

//     createMsg = ({user = 'Ivan', text = '1 new message sent'}) => {
//         const messages = this.state.messages
//         // let newMsg = { user, text }
//         //     user: 'Ivan', 
//         //     text: '1 new message sent'
//         // }
//         this.setState((state) => ({messages: [...messages, {user , text}]}))
//     }

//     componentDidUpdate () {
//         const num = this.state.messages.length - 1
//         const userBot = 'Robot'
//         if (this.state.messages[num].user !== userBot) {
//             this.createMsg ({user: userBot, text: 'Bot is busy, it will answer soon...'})
//         }
//     }

//     render () {
//         const messages = this.state.messages
//         return (
//             <div className="container">
//                 <button onClick={this.createMsg}>Create message</button>
//                 <MessageList messages={messages}/>
//             </div>
//         )
//     }
// }