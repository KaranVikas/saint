import React from 'react'
import mainImg from '../../Assets/mainImage.png'

const HeroSection = () => {
  return (
    <div className='container'>
        <div className='text-center mainImgdiv'>
         <img className='mainImg text-center w-100' src={mainImg} alt="main image"  />
        </div>
        <div className='text-center'>
            <h1 className='mainPageStyle nyel'>A few words about this blog platform, Ghost, and how this site was made</h1>
            <h3 className='mainPageStyle sfmono'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</h3>
            <div className='w-100 mx-auto mainLine' style={{border:'2px solid #000000'}}></div>
        </div>
    </div>
  )
}

export default HeroSection