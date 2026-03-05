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

const initialState : ToDosState = {
    todos: []
}

type ToDosContextProviderProps = {
    children: ReactNode
}

const ActionType =  {
    ADD  : 'ADD_TO_DO',
    DELETE : 'DELETE_TO_DO' ,
    UPDATE  : 'UPDATE_TO_DO'
} as const




type Action = AddToDoAction | DeleteToDoAction | UpdateToDoAction

type AddToDoAction = {
    type: typeof ActionType.ADD,
    payload: ToDo
}

type DeleteToDoAction = {
    type: typeof ActionType.DELETE,
    payload: number
}

type UpdateToDoAction = {
    type: typeof ActionType.UPDATE,
    payload: number
}


const toDosReducer = (state: ToDosState, action: Action): ToDosState => {
    switch (action.type) {
        case ActionType.ADD:
            return {
                ...state,
                todos: [  ...state.todos,action.payload]

            }
        case ActionType.DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)

            }
        case ActionType.UPDATE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ?
                        { ...todo, status: todo.status==='complete'? 'pending': 'complete' } :
                        todo)
            }
        default:
            return state;
    }
}

export const useToDosContext= ()=>{
    const todosCtx  = useContext(ToDosContext)
    if(todosCtx=== null){
        throw new Error('ToDosContext is null - error')
    }
    return todosCtx;
}

export const ToDosProvider = ({ children }: ToDosContextProviderProps) => {
    const [todosState, dispatch] = useReducer(toDosReducer, initialState)
    const ctx: ToDoContext = {
        todos: todosState.todos,
        addToDo(todo) {
            dispatch({ type: ActionType.ADD, payload: todo })
        },
        deleteToDo(id) {
            dispatch({ type: ActionType.DELETE, payload: id })
        },
        updateToDoStatus(id) {
            dispatch({ type: ActionType.UPDATE, payload: id })
        }
    }

    return (
        <ToDosContext.Provider value={ctx}>
            {children}
        </ToDosContext.Provider>
    )
}