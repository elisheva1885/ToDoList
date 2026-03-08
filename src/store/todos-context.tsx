import {  useReducer } from "react";
import { ActionType, type Action, type ToDo, type ToDoContext, type ToDosContextProviderProps, type ToDosState } from "./types";
import { ToDosContext } from "./use-todos-context";



const initialState : ToDosState = {
    todos: []
}

const toDosReducer = (state: ToDosState, action: Action): ToDosState => {
    switch (action.type) {
        case ActionType.ADD:{
            const todo : ToDo = {
                id: (state.todos[state.todos.length - 1]?.id ?? 0 )+1,
                description : action.payload,
                status: 'pending'
            }
            return {
                ...state,
                todos: [  ...state.todos,todo]
            }
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
    console.log("in the prov ",ctx)

    return (
        <ToDosContext.Provider value={ctx}>
            {children}
        </ToDosContext.Provider>
    )
}