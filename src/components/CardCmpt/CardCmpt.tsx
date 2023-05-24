import React from 'react'
import './CardCmpt.css'
const CardCmpt = ({Cardimg,Cardtitle}) => {
    console.log(Cardimg, "asd")
    return (
    <div className='text-center'>
        <div className='Cardimg'>
          <img className=" h-100 w-100" src={Cardimg} />
        </div>
        <h3 className=" sfdisp " >{Cardtitle}</h3>
    </div>
  )
}

export default CardCmpt