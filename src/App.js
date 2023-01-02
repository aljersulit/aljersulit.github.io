import React from 'react'

import { About, Footer, Header, Skills, Certification, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certification />
      <Footer />
    </div>
  )
}

export default App