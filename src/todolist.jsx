import React from 'react';
import "./App.css";


const Todolist = (props) => {
    return(
    <div className="todo_style">
        <button onClick={()=>{
            props.onSelect(props.id);
        }}>-</button>
        <li className="list_item">{props.text}</li>
    </div>
    )
}

export default Todolist;