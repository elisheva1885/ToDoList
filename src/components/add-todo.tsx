
import { useRef } from 'react'
import './add-todo.css'
export const AddToDo = () => {
    const input_ref = useRef(null);
    const todo = {
        id: 1,
        desc: '',
        status : 'pending'
    }
    const save = () => {
        todo.desc = input_ref.current?.value;
        console.log(todo.desc);

    }

    return (
        <input id="input-todo" ref={input_ref} onChange={save} type="text" placeholder="Enter a new task" />
    )
}