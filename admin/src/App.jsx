import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Admin from './Pages/Admin/Admin.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <Navbar/>
       <Admin/>
      </div>
  )
}

export default App
