
import './App.css'
import { AddToDo } from './components/add-todo'
import { ToDosProvider } from './store/todos-context'

const App = () => {
  
  
  return (
    <ToDosProvider>
      <AddToDo/>
    </ToDosProvider>
  )
}

export default App
