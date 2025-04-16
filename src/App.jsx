import React from 'react'
import './App.css'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'
import Capa from './components/Capa/Capa'

function App() {


  return (
    <>
      <header>
        <Logo/>
        <Navbar/>
      </header>

      <main>
        <Capa/>
      </main>

      <footer>
      </footer>
    </>
  )
}

export default App
