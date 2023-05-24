import React from 'react'
import './LongShareBtn.css'
import { Facebook, LongLine, Tweet } from '../../svgs'
const ShareBtn = () => {
  return (
    <div className='shareLongBtn d-flex  align-items-center justify-content-evenly mx-auto'>
      <a className='d-flex align-items-center'>
        <span className='me-3 align-content-end'><Facebook /></span> Share on Facebook
      </a>
      <a><LongLine /></a>
      <a className='d-flex align-items-center'>
        <span className='me-3 align-content-end'><Tweet /></span> Share on Facebook
      </a>
    </div>
  )
}

export default ShareBtn