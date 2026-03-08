import './todo-list.css'



type ToDo = {
    id: number,
    description: string,
    status: 'pending' | 'complete'
};



export const TodoList = () => {
    const todos : ToDo[] = [];
    let pending_todos_count = 0;
    todos.map(todo => todo.status === 'pending' ? pending_todos_count++ : pending_todos_count)
    return (
        <>
            <div className='list-body'>
                <p className='pending-tasks'> Pending tasks ({pending_todos_count})</p>

                {/* {todos.map(todo =>)} */}
            </div>
        </>
    )
}