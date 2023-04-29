import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Skill from './components/Skill';


function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skill/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
