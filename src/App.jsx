import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navbar from './Components/Navbar';
import FretBoard from './Components/Fretboard';

function App() {

  return (
    <div className="App flex">
      <Navbar />
      <FretBoard />
    </div>
  )
}

export default App
