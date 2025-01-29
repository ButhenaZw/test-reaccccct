import React from 'react'
import './signup.css'

export default function signup() {
  return (
    <div className='bodyl'>
       <>
      <div className="card">
        <div className="card-image"></div>
        

        <form className="forma">
            <h1 style={{marginBottom:'20px'}}>Login</h1>
          <input className='inputa'
            type="text"
            placeholder="Email"
      
          />
          <p className="error"></p>

          <input className='inputa'
            type="password"
            placeholder="Password"
          />
          <p className="error"></p>


          <button className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
    </div>
  )
}
