import React from "react";
import ReactDOM from "react-dom";

export const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
}
