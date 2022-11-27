import React from 'react'

 const Navbar = (props) => {
   const { handleClear, input, handleInputChange, handleFormSubmit } = props;
  return (
    <div className='navbar flex'>
        <h2>Guitar Project</h2>
        <div className="forms flex">
          <button id="clear-btn" onClick={handleClear}>Clear</button>
        {/* <form onSubmit={handleFormSubmit} className="flex forms">
            <input type={'text'} placeholder="search note or chord" value={input} onChange={handleInputChange} />
            <button type={'submit'}>submit</button>
        </form> */}
        </div>
    </div>
  )
}

export default Navbar;