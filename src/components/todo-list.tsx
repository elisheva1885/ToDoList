import { useToDosContext } from '../store/use-todos-context';
import { AddToDo } from './add-todo';
import { ToDoItem } from './todo-item';
import './todo-list.css'


export const TodoList = () => {
    const ctx = useToDosContext();
    let pendingTodosCount = 0;
    ctx.todos.map(todo => todo.status === 'pending' ? pendingTodosCount++ : pendingTodosCount)
    return (
        <>
            <div className='list-body'>
                
                <p className='pending-tasks'>{pendingTodosCount===0? ctx.todos.length===0?<span>There are not tasks to do</span>:<span>All tasks completed!</span>:<span>Pending tasks ({pendingTodosCount})</span>} </p>
                <div className='todos'>
                {ctx.todos.map(todo => <span className='todo'><ToDoItem todo={todo}/></span>)}
                </div>
                <span className='add-task'>
                <AddToDo/>
                </span>
            </div>
        </>
    )
}