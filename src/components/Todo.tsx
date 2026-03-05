//change to get the info from the context


export function ToDo() {
    const todo = {
        id: 1,
        description : "working on the todoList",
        status: 'pending'
    } 
    return(
        <div className="todo-box">
            {todo.description}
            <button disabled = {todo.status!=='pending'}>{todo.status!=='pending'? 'Completed': 'Complete'}</button>
            <button className="delete-button">X</button>
        </div>
    )
}