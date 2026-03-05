import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddToDo } from './components/add-todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddToDo>
      
     </AddToDo>
    </>
  )
}

export default App
