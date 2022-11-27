import {React, useState} from 'react';
import String from './String';



const Fretboard = (props) => {
    const {fretData, handleFretClick} = props;
    const stringNames = Object.keys(fretData);

    return (
        <div className='flex'>
            <div className="fretboard">
                {
                    Object.values(fretData).map((string, i) => {
                        return (
                            <div className='flex' key={i} style={{justifyContent: "space-between"}}>
                                <span className='string-name'>{stringNames[i] !== 'numbers' && stringNames[i]}</span>
                                <String frets={string} string={stringNames[i]} handleFretClick={handleFretClick} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Fretboard;
