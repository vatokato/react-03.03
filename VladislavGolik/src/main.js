import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("a", {href: "https://ya.ru"}, "Yandex.ru");

// const Link = () =>  React.createElement("a", {href: "https://ya.ru"}, "Yandex");

// function Link(props) {
//     return React.createElement("a", {href: `https://${props.to}`}, props.to.toLocaleUpperCase());
// }

function Link(props) {

return <a href={"https://" + props.to}>{props.to.toLocaleUpperCase()}</a>
}

ReactDOM.render(<Link to="ya.ru"/>, document.getElementById("root"));