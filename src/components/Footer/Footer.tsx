import React from 'react'
import './Footer.css'
import {scrolldata} from './utlity'
import { Logo } from '../../svgs'
const Footer = () => {
    return (
        <>
        <footer className='footerDesign'>
        <div className='footerHead d-flex justify-content-between'>
                {
                    scrolldata.map((item,index)=>{
                        return(
                            <p className={` ${index%2 === 0 ? 'text-even': 'text-odd' }`} key={index}>{item}</p>
                        )
                    })
                }    


                </div>
            <div className=' container text-center'>
                
                <div className='logospace'><Logo/></div>
                <div className='d-flex mx-auto w-75'>
                <p className='nys4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
                </div>
                <div className="d-flex justify-content-center ">
                    <a className="footerLinkTags">Twitter</a>
                    <a className="footerLinkTags">LinkedIn</a>
                    <a className="footerLinkTags">RSS</a>
                </div>
                <h4 className='sfdisptext mb-0'>© 2012 2020 Nordic Rose Co. </h4>
                <h4 className='sfdisptext pb-5' >All rights reserved. </h4>
                        
        </div>

        </footer>
        </>
    
  )
}

export default Footer