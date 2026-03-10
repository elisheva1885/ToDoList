
import './App.css'
import { AddToDo } from './components/add-todo'
import { ToDoItem } from './components/todo-item'
import { ToDosProvider } from './store/todos-context'
import type { ToDo } from './store/types'

const App = () => {
  const todo:ToDo = {
    id:1,
    description: 'aaaaaaaaaaaaaaaa',
    status:'complete'
  }
  
  return (
    <ToDosProvider>
      <ToDoItem todo={todo}/>
      <AddToDo/>

    </ToDosProvider>
  )
}

export default App
