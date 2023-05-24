import React from 'react'
import './ShareBtn.css'
import { Facebook, Line, Tweet } from '../../svgs'
const ShareBtn = () => {
  return (
    <div className='shareBtn d-flex  align-items-center justify-content-evenly'>
      <Facebook />
      <Line />
      <Tweet />
    </div>
  )
}

export default ShareBtn