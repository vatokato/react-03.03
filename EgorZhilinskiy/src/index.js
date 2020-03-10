import React from "react";
import ReactDOM from "react-dom";
import { MessageList } from "./components/MessageList/MessageList";

let user = 'It';


//ReactDom.render(<MessageList messages = {messages}/>, document.getElementById("root"))

ReactDOM.render (<MessageList user={ user }/>,document.getElementById('root'))

