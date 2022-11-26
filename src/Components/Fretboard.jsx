import {React, useState} from 'react';
import String from './String';



const Fretboard = () => {
    const [fretData, setFretData] = useState([
        Array(12).fill(""),
        Array(12).fill(""),
        Array(12).fill(""),
        Array(12).fill(""),
        Array(12).fill(""),
        Array(12).fill(""),
    ]);

    const handleFretClick = (string, fret) => {
        console.log('string', string, 'fret', fret);
        setFretData(prev => {
            const val = prev[string][fret];
            prev[string][fret] = prev[string][fret] === true ? false : true;
            return [...prev];
        })
        console.log("fretdata", fretData);
    }

    return (
        <div className='flex'>
            <div className="fretboard">
                {
                    fretData.map((string, i) => {
                        return (
                            <String frets={string} string={i} key={i} handleFretClick={handleFretClick} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Fretboard;
