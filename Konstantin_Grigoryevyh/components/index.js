import React from "react";
import ReactDOM from "react-dom";
import { MessageList } from './messagelist.js';

const messages = [
    { name: "Oleg", content: "Hi, all!" },
    { name: "Anton", content: "Hello!" },
    { name: "Oleg", content: "Interesting lesson? )" },
]


// const Message = ({name, content}) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }

// const MessageList = ({messages}) => {
//     return (<ul>
//         {messages.map((item, index) => <Message {...item} key={index} />)}
//     </ul>);
// }

ReactDOM.render(<MessageList messages={messages} />, document.getElementById("root"))