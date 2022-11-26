import React from 'react'

const String = (props) => {
  const {frets, string, handleFretClick} = props;

  return (
    <div className='string flex'>
      {
        frets.map((fret, i) => <span key={i} className="fret flex" onClick={() => handleFretClick(string, i)}>
          {fret && <span className='circle'></span>}
        </span>)
      }
    </div>
  )
}

export default String;