import React from 'react'

 const Navbar = (props) => {
   const { handleClear } = props;
  return (
    <div className='navbar flex'>
        <h2>Guitar Project</h2>
        <div className="forms flex">
          <button id="clear-btn" onClick={handleClear}>Clear</button>
            <input type={'text'} placeholder="search note or chord" />
        </div>
    </div>
  )
}

export default Navbar;