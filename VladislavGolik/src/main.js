import React from "react";
import ReactDOM from "react-dom";

const massages = [
    {name: "Ivan", content: ": Good evening! I’d like to send some flowers to my girlfriend, please."},
    {name: "Lena", content: ": Of course. What do you have in mind?"},
    {name: "Ivan", content: ": Two dozen white roses."},
];

const Massage = ({name, content}) => <li><strong>{name}</strong>{content}</li>

const MassageList = ({massages}) => {
    return (
        <ul>
        {massages.map((item, index) => <Massage {...item} key={index} />)}
        </ul>
    );
}

ReactDOM.render(
    <MassageList massages={massages} />,
    document.getElementById("root")
);