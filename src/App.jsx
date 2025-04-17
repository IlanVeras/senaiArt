import React from 'react'
import './App.css'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'
import Capa from './components/Capa/Capa'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Galeria from './components/Galeria/Galeria'

function App() {


  return (
    <>
      <header>
        <Logo/>
        <Navbar/>
      </header>

      <main>
        <Capa/>
        <Galeria/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
