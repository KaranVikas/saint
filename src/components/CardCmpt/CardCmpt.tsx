import React from 'react'
import './CardCmpt.css'
const CardCmpt = ({Cardimg,Cardtitle}) => {
    console.log(Cardimg, "asd")
    return (
    <div className='text-center'>
        <img className="Cardimg" src={Cardimg} />
        <h3 className="Cardimg mx-auto">{Cardtitle}</h3>
    </div>
  )
}

export default CardCmpt