import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Routers from './routers/Router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routers></Routers>
    </div>
  )
}

export default App
