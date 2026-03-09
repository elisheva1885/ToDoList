
import { useRef } from 'react'
import './add-todo.css'
import { useToDosContext } from '../store/use-todos-context';
export const AddToDo = () => {
    const ctx = useToDosContext();
    const input_ref = useRef<HTMLInputElement>(null);
    const save = () => {
        const input = input_ref.current;
        if (input === null || input.value === '') {
            return;
        }
        ctx.addToDo(input.value)
    }

    return (
        <input id="input-todo" ref={input_ref} type="text" placeholder="Enter a new task" onKeyDown={e => {
            if (e.key === 'Enter') {
                save()
            }
        }} />
    )
}