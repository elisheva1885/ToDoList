import { createContext, useContext } from "react";
import type { ToDoContext } from "./types";


export const ToDosContext = createContext<ToDoContext | null>(null);

export const useToDosContext= ()=>{
    const todosCtx  = useContext(ToDosContext)    
    if(todosCtx=== null){
        throw new Error('ToDosContext is null - error')
    }
    return todosCtx;
}