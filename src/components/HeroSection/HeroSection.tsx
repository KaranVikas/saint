import React from 'react'
import mainImg from '../../Assets/mainImage.png'

const HeroSection = () => {
  return (
    <div className='container'>
        <div className='text-center mainImgdiv'>
         <img className='mainImg text-center' src={mainImg} alt="main image"  />
        </div>
        <div className='text-center'>
            <h2 className='mainPageStyle'>A few words about this blog platform, Ghost, and how this site was made</h2>
            <h3 className='mainPageStyle'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</h3>
            <div className='w-75 mx-auto mainLine' style={{border:'2px solid #000000'}}></div>
        </div>
    </div>
  )
}

export default HeroSection