import {  createContext, useReducer, type ReactNode } from "react";

type ToDo = {
    id: number,
    description : string,
    status : 'pending' | 'complete'
};

type ToDos = {
    todos : ToDo []
};

type ToDoContext = ToDos & {
    addToDo : (todo: ToDo)=> void,
    deleteToDo : (id: number)=> void,
    updateToDoStatus : (id: number)=> void
};
const ToDosContext = createContext<ToDoContext | null>(null);

const initalState : ToDos = {
    todos : []
}

type ToDosContextProviderProps = {
    children : ReactNode
}

type Action = AddToDoAction| DeleteToDoAction | UpdateToDo

type AddToDoAction = {
    type: 'ADD_TO_DO',
    payload : ToDo
}

type DeleteToDoAction = {
    type: 'DELETE_TO_DO',
    payload : number
}

type UpdateToDo = {
    type : 'UPDATE_TO_DO',
    payload : number
}


function toDosReducer(state : ToDos, action : Action): ToDos{
    if(action.type === 'ADD_TO_DO'){  
        return{
            ...state,
            todos:[
                {
                    id: action.payload.id,
                    description : action.payload.description,
                    status: action.payload.status
                }
            ]

        }
    }
    if( action.type === 'DELETE_TO_DO'){
        return{
            ...state,
            
            
        }
    }
    if(action.type ===  'UPDATE_TO_DO'){
        return{
            ...state
        }
    }
    return state;
}

function ToDosContextProvider(props: ToDosContextProviderProps){
   const [todosState , dispatch] =  useReducer(toDosReducer , initalState)
    const ctx : ToDoContext = {
        todos : [] ,
        addToDo(todo){
            dispatch({type: 'ADD_TO_DO', payload: todo})
        },
        deleteToDo(id){
            dispatch({type: 'DELETE_TO_DO', payload: id})
        },
        updateToDoStatus(id){
            dispatch({type: 'UPDATE_TO_DO', payload: id})
        }
    }
}