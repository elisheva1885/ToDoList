
import './App.css'
import { TodoList } from './components/todo-list'
import { ToDosProvider } from './store/todos-context'

const App = () => {
  
  
  return (
    <ToDosProvider>
     <TodoList/>
      </ToDosProvider>
  )
}

export default App
