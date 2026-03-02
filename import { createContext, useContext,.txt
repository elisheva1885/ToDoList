import { createContext, useContext, useReducer, type ReactNode } from "react";

type ToDo = {
    id: number,
    description: string,
    status: 'pending' | 'complete'
};

type ToDosState = {
    todos: ToDo[]
};

type ToDoContext = ToDosState & {
    addToDo: (todo: ToDo) => void,
    deleteToDo: (id: number) => void,
    updateToDoStatus: (id: number) => void
};
const ToDosContext = createContext<ToDoContext | null>(null);

const initalState: ToDosState = {
    todos: []
}

type ToDosContextProviderProps = {
    children: ReactNode
}

type Action = AddToDoAction | DeleteToDoAction | UpdateToDoAction

type AddToDoAction = {
    type: 'ADD_TO_DO',
    payload: ToDo
}

type DeleteToDoAction = {
    type: 'DELETE_TO_DO',
    payload: number
}

type UpdateToDoAction = {
    type: 'UPDATE_TO_DO',
    payload: number
}


function toDosReducer(state: ToDosState, action: Action): ToDosState {
    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state,
                todos: [  ...state.todos,action.payload]

            }
        case 'DELETE_TO_DO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)

            }
        case 'UPDATE_TO_DO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ?
                        { ...todo, status: 'complete' } :
                        todo)
            }
        default:
            return state;
    }
}

export function useToDosContext (){
    const todosCtx  = useContext(ToDosContext)
    if(todosCtx=== null){
        throw new Error('ToDosContext is null - error')
    }
    return todosCtx;
}

export function ToDosProvider({ children }: ToDosContextProviderProps) {
    const [todosState, dispatch] = useReducer(toDosReducer, initalState)
    const ctx: ToDoContext = {
        todos: todosState.todos,
        addToDo(todo) {
            dispatch({ type: 'ADD_TO_DO', payload: todo })
        },
        deleteToDo(id) {
            dispatch({ type: 'DELETE_TO_DO', payload: id })
        },
        updateToDoStatus(id) {
            dispatch({ type: 'UPDATE_TO_DO', payload: id })
        }
    }

    return (
        <ToDosContext.Provider value={ctx}>
            {children}
        </ToDosContext.Provider>
    )
}