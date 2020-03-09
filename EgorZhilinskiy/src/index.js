import React from "react";
import ReactDom from "react-dom";
import { MessageList } from "./components/MessageList/MessageList";


// // const Message = ({name, content}) => {
// // return <li><strong>{name}</strong>{content}</li>
// // }

// const MessageList = ({messages}) => {
//     return (<ul>
//         {/* {props.messages.map(item => <Message name = {item.name} content = {item.content} />)} */}
//         {messages.map(item => <Message {...item} />)}
//         </ul>);
// }

//ReactDom.render(<MessageList messages = {messages}/>, document.getElementById("root"))
ReactDOM.render (<MessageList user={ user }/>,document.getElementById('root'))

