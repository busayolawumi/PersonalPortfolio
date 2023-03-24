import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const App = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App