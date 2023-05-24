import React from 'react'
import './Header.css'
import { Logo } from '../../svgs'
import logoimg from '../../Assets/Logoimage.png'
const header = () => {
  return (
    <div className=''>
        <div className='head'>
            <div className='' ><a>
              <img src={logoimg} />
              </a></div>
            <div className='nys5 heads'>
                <ul>
                    <li className="active"><a href="#">BLOG</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">LINKS</a></li>
                    <li><a href="#">PROJECTS</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default header