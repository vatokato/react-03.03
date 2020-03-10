import React, { Component } from 'react';
import MessageField from './components/MessageField';

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>Chat with People</h1>
                <div>
                    <MessageField />
                </div>
            </div>
        );
    }
}
