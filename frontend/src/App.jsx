import { useState } from 'react'

import './css/App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (

    <div>
      <Navbar/>
      <main className = "main-content">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "pages/About" element = {<About/>}/>
          <Route path = "pages/Contact" element = {<Contact/>}/>
        </Routes>
      </main>
</div>

  );
}

export default App