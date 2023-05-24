import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
      <div className='newsletter mx-auto px-5'>
          <h2 style={{color:"black",marginTop:"62px"}}>
              Sign up for the newsletter
          </h2>
          <h3 className=''>
              If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
          </h3>
          
          <div className="input-group mb-4">
              <input type="text" className="m form-control" placeholder="Enter Your email..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-dark" type="button" id="button-addon2">SIGN UP</button>
          </div>
      </div>
  )
}

export default NewsLetter