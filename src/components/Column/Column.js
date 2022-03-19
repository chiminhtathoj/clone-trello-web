import React from "react";
import "./Column.scss";
import Task from "components/Task/Task";
function Column(){
    return (
        <div className="column">
        <header>Name </header>
        <ul className="task-list">
            <Task />
            <li className="task-item">addcard</li>
            <li className="task-item">addcard</li>
            <li className="task-item">addcard</li>
            <li className="task-item">addcard</li>
            <li className="task-item">addcard</li>
        </ul>
        <footer>add card</footer>
    </div>
    )
}


export default Column