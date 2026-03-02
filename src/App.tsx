import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDosProvider } from './store/toDos-context'

function App() {

  return (
    <ToDosProvider>
      <div>Hello</div>
    </ToDosProvider>
  )
}

export default App
