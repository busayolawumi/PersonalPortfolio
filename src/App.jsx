import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Landing from './sections/Landing'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const App = () => {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App