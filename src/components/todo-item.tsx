//change to get the info from the context

import type { ToDo } from '../store/types';
import { useToDosContext } from '../store/use-todos-context';
import './todo-item.css'

type ToDoItemProps = {
    todo: ToDo;
}
export const ToDoItem = ({ todo }: ToDoItemProps) => {
    const ctx = useToDosContext()
    const updateStatus = () => {
        ctx.updateToDoStatus(todo.id)
    }
    const deleteTodo = () => {
        ctx.deleteToDo(todo.id)
    }
    return (
        <div className="todo-box inter">
            <p className={todo.status === 'pending' ? 'description pending-txt' : 'description completed-txt'}>{todo.description}</p>
            <button className={todo.status === 'pending' ? 'button pending' : 'button completed'} onClick={updateStatus}>{todo.status !== 'pending' ? 'Completed' : 'Complete'}</button>
            <button className="delete" onClick={deleteTodo}>X</button>
        </div>
    )
}