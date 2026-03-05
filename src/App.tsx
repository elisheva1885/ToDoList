
import './App.css'
import { ToDosProvider } from './store/toDos-context'

const App = () => {

  return (
    <ToDosProvider>
      <div>Hello</div>
    </ToDosProvider>
  )
}

export default App
