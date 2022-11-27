import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navbar from './Components/Navbar';
import FretBoard from './Components/Fretboard';

function App() {
  const [fretData, setFretData] = useState({
    e:Array(12).fill(""),
    B:Array(12).fill(""),
    G:Array(12).fill(""),
    D:Array(12).fill(""),
    A:Array(12).fill(""),
    E:Array(12).fill(""),
    numbers: Array(12).fill(""),
  });

  const handleFretClick = (string, fret) => {
    setFretData(prev => {
      if(string === 'numbers'){
        return {...prev};
        // const keys = Object.keys(prev);
        // keys.forEach(key => {
        //   prev[key].forEach((el, i) => {
        //     if (prev[key][fret]){
        //       prev[key][fret] = false;
        //     }else{
        //       prev[key][fret] = true;
        //     }
        //   })
        // })
        // console.log(prev);
        // return {...prev};
      }
      const val = prev[string][fret];
      prev[string][fret] = val === true ? false : true;
      return {...prev};
    })
  }

  const handleClear = () => {
    setFretData(
      {
        e: Array(12).fill(""),
        B: Array(12).fill(""),
        G: Array(12).fill(""),
        D: Array(12).fill(""),
        A: Array(12).fill(""),
        E: Array(12).fill(""),
        numbers: Array(12).fill(""),
      }
      )
  }

  return (
    <div className="App flex">
      <Navbar handleClear={handleClear} />
      <FretBoard fretData={fretData} handleFretClick = {handleFretClick} />
    </div>
  )
}

export default App
