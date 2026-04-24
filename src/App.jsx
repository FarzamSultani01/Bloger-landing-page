import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Head from './components/Head'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SecondHero from './components/SecondHero'
import ThirdHero from './components/ThirdHero'

function App() {

  return (
    <div>
      <Head />
      <Hero />
      <SecondHero />
      <ThirdHero />
      <Footer />
  </div>
  )
}

export default App
