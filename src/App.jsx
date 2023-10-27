import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ContainerBox from './components/ContainerBox/ContainerBox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ContainerBox />
    </>
  )
}

export default App
