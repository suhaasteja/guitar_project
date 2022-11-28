import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navbar from './Components/Navbar';
import FretBoard from './Components/Fretboard';

const magicScale = ["t", "t", "t", "h", "t", "t", "t", "h"]
const allNotes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];


const getNoteName = (string, fret) => {
  const index = allNotes.indexOf(string.toLowerCase())+fret+1;
  let note = allNotes[index];
  
  if(!note){
    // index > allnotes length
    note = allNotes[index-allNotes.length];
  }

  return note;
}

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

  const [input, setInput] = useState('');
  const [chord, setChord] = useState("");

  const handleFretClick = (string, fret) => {
    setFretData(prev => {
      if(string === 'numbers'){
        return {...prev};
      }
      const val = prev[string][fret];
      prev[string][fret] = val ? "" : getNoteName(string, fret);
      getChordName(prev);
      return {...prev};
    })
  }

  const getChordName = (fretData) => {
    const strings = Object.keys(fretData);
    let notes = Object.values(fretData).map(arr => arr.filter(el => el).slice(-1));

    notes.forEach((note, i) => {
      if(!note[0]){
        notes[i][0] = strings[i].toLowerCase();
      }
    });

    notes.pop();

    notes = [...new Set(notes.flat())];

    const noteNumbers = [];
    const l = notes.length;

    const magicScaleObj = {}

    notes.forEach((n, i) => {
      // magicScaleObj[n] = 
    })

    // notes.forEach((n, i) => {
    //   const j = allNotes.indexOf(n);
    //   if(j){
    //     noteNumbers.push(j)
    //   }
    // })

    const chord = notes.join(", ");

    setChord(chord);

    console.log("notes", notes,"strings", strings, "chord", "chord","noteNumbers", noteNumbers, "fretData", fretData);
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

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="App flex">
      <Navbar handleClear={handleClear} input={input} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
      <FretBoard fretData={fretData} handleFretClick = {handleFretClick} />
      <p>notes = {chord}</p>
    </div>
  )
}

export default App
