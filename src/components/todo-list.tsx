import { useToDosContext } from '../store/use-todos-context';
import { ToDoItem } from './todo-item';
import './todo-list.css'


export const TodoList = () => {
    const ctx = useToDosContext();
    let pending_todos_count = 0;
    ctx.todos.map(todo => todo.status === 'pending' ? pending_todos_count++ : pending_todos_count)
    return (
        <>
            <div className='list-body'>
                <p className='pending-tasks'> Pending tasks ({pending_todos_count})</p>
                <div className='todos'>
                {ctx.todos.map(todo => <span className='todo'><ToDoItem todo={todo}/></span>)}
                </div>
            </div>
        </>
    )
}