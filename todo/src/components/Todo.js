import React from "react";

import "./Todo.css";

const Todo = props => {



    return (
        <div
       
            style={{ textDecoration: `${props.item.completed ? "line-through" : "none"}` ,
        cursor: 'pointer'}}
        >
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;
