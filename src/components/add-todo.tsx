
import { useRef } from 'react'
import './add-todo.css'
import { useToDosContext } from '../store/use-todos-context';
export const AddToDo = () => {
    const ctx = useToDosContext();
    const input_ref = useRef(null);
    // const todo = {
    //     id: 1,
    //     desc: '',
    //     status : 'pending'
    // }
    const save = () => {
        const desc = input_ref.current?.value;
        ctx.addToDo(desc)
        console.log("updated todo: ", ctx.todos);
        
    }

    return (
        <input id="input-todo" ref={input_ref} onBlur={save} type="text" placeholder="Enter a new task" />
    )
}