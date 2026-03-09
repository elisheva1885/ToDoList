
import './App.css'
import { ToDoItem } from './components/todo-item'
import { ToDosProvider } from './store/todos-context'
import type { ToDo } from './store/types'

const App = () => {
  
  
  return (
    <ToDosProvider>
     Hello
      </ToDosProvider>
  )
}

export default App
