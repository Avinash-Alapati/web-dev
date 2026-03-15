import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      {/* <LudoBoard /> */}
    </>
  )
}

export default App
