import { useState } from 'react'
import './App.css'
import MyApp from './MyApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyApp/>
    </>
  )
}

export default App
