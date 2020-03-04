import React from "react";
import ReactDOM from "react-dom";

const massages = [
    {name: "Ivan", content: ": Good evening! I’d like to send some flowers to my girlfriend, please."},
    {name: "Lena", content: ": Of course. What do you have in mind?"},
    {name: "Ivan", content: ": Two dozen white roses."},
];

const Massage = (props) => {
return <li><strong>{props.name}</strong>{props.content}</li>
}

const MassageList = (props) => {
    return (
        <ul>
        {props.massages.map(item => Massage(item))}
        </ul>
    );
}

ReactDOM.render(<MassageList massages={massages} />, document.getElementById("root"));