import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hotdeals from './components/Hotdeals'
import About from './components/About'
import Products from './components/Products'
import Comments from './components/Comments'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='container overflow-hidden font-bold'>
      <Navbar />
      <Hero />
      <Hotdeals />
      <About />
      <Products />
      <Comments />
      <Footer />
    </div>
  )
}

export default App