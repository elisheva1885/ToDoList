
import './App.css'
import { ToDosProvider } from './store/todos-context'

const App = () => {

  return (
    <ToDosProvider>
      <div>Hello</div>
    </ToDosProvider>
  )
}

export default App
