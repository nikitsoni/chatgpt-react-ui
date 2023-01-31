import React from 'react'

import './App.css';

import { Brand, CTA, Navbar } from './components/index.js'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers/index.js'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>

  )
}

export default App