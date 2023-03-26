import React from 'react'
import { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Work from './components/work/Work'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'

import './App.scss'


const App = () => {
   const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div>
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className='section'>
      <Intro />
      <Portfolio/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </div>
    </div>
  )
}

export default App