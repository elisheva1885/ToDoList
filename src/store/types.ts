import type { ReactNode } from "react";

export type ToDo = {
    id: number,
    description: string,
    status: 'pending' | 'complete'
};

export type ToDosState = {
    todos: ToDo[]
};

export type ToDoContext = ToDosState & {
    addToDo: (description: string) => void,
    deleteToDo: (id: number) => void,
    updateToDoStatus: (id: number) => void
};

export type ToDosContextProviderProps = {
    children: ReactNode
}

export type Action = AddToDoAction | DeleteToDoAction | UpdateToDoAction

export const ActionType =  {
    ADD  : 'ADD_TO_DO',
    DELETE : 'DELETE_TO_DO' ,
    UPDATE  : 'UPDATE_TO_DO'
} as const


export type AddToDoAction = {
    type: typeof ActionType.ADD,
    payload: string
}

export type DeleteToDoAction = {
    type: typeof ActionType.DELETE,
    payload: number
}

export type UpdateToDoAction = {
    type: typeof ActionType.UPDATE,
    payload: number
}