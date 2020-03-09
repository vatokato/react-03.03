import React, { Component } from 'react';
import { Message } from './Message/Message'

export default class MessegeField extends Component {
    state = {
        messages: [
            { name: "Ivan", content: "Hello, world!" },
            { name: "Petr", content: "Helo, how are you?" },
            { name: "Ivan", content: "I'm well" },
        ]
    }


    handleClick = (e) => {
        e.preventDefault();
        const { name, message } = e.target;

        Promise.resolve()
            .then(
                this.setState(
                    (state) => (state.messages.push({ name: name.value, content: message.value }))
                )
            )
            .then(
                this.setState(
                    (state) => (state.messages.push({ name: 'Robot', content: `Уважаемый ${name.value}! Ваше сообщение принято.` }))
                )
            )
            .catch(err => console.log(err));

    }
    render() {
        const { state: { messages }, handleClick } = this;
        return (
            <>
                <ul>
                    {messages.map((item, index) => <Message {...item} key={index} />)}
                </ul>

                <form onSubmit={handleClick}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Введите имя"
                        required
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="Введите сообщение"
                        required
                    />
                    <button type="submit">Отправить сообщение</button>
                </form>
            </>
        )
    }
}