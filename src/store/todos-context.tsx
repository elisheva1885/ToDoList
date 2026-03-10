import {  useReducer } from "react";
import { ActionType, type Action, type ToDo, type ToDoContext, type ToDosContextProviderProps, type ToDosState } from "./types";
import { ToDosContext } from "./use-todos-context";



const initialState: ToDosState = {
  todos: [
    {
      id: 1,
      description: "Buy groceries for the week including vegetables, fruits, milk, eggs, bread and a few snacks for the weekend",
      status: "pending"
    },
    {
      id: 2,
      description: "Finish the React TodoList assignment and make sure the add, delete and complete actions all work correctly",
      status: "pending"
    },
    {
      id: 3,
      description: "Clean the kitchen and organize the cabinets because everything became messy during the last few days",
      status: "complete"
    },
    {
      id: 4,
      description: "Go for a long evening walk in the park to clear the head after a long day of coding and studying",
      status: "pending"
    },
    {
      id: 5,
      description: "Read documentation about React Context and useReducer to better understand how global state works",
      status: "pending"
    },
    {
      id: 6,
      description: "Prepare a list of questions for the team lead about the Todo project and the expected behavior of the input field",
      status: "complete"
    },
    {
      id: 7,
      description: "Review pull request comments carefully and fix the styling issues related to the input focus border",
      status: "pending"
    },
    {
      id: 8,
      description: "Refactor the Todo component so the layout behaves correctly when the text becomes very long and wraps to a new line",
      status: "pending"
    },
    {
      id: 9,
      description: "Spend some time practicing TypeScript types for reducers and actions to avoid common typing errors",
      status: "complete"
    },
    {
      id: 10,
      description: "Check how the UI behaves when there are many tasks in the list and make sure scrolling still works well",
      status: "pending"
    }
  ]
};

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

    return (
        <ToDosContext.Provider value={ctx}>
            {children}
        </ToDosContext.Provider>
    )
}