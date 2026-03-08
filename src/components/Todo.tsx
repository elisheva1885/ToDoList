//change to get the info from the context
import { TiDelete } from "react-icons/ti";

import './todo.css'
import { FaTimes } from "react-icons/fa";
export const ToDo = ()=> {
    const todo = {
        id: 1,
        description : "working on the todoList",
        status: 'pending'
    } 
    const showClick = ()=> {
        alert('click')
    }
    return(
        <div className="todo-box">
           <p className={todo.status==='pending'? 'description pending': 'description completed'}>{todo.description}  </p> 
            <button className={todo.status==='pending'? 'button-pending': 'button-completed'} disabled = {todo.status!=='pending'} onClick={showClick}>{todo.status!=='pending'? 'Completed': 'Complete'}</button>
            <button className="delete-button" onClick={showClick}>    <FaTimes />

</button>
        </div>
    )
}