import React from 'react'
import CardCmpt from '../CardCmpt/CardCmpt'
// import { CardImg } from 'react-bootstrap'
import Cardimg from '../../Assets/Image1.png'
import img2 from '../../Assets/Image2.png'

import './ArticleSection.css'



const ArticleSection = () => {
    const Cardtitle="Here are some things you should know regarding how we work "
  return (
    <div className='container'>
        <div className='text-center row'>
            <h2>All articles</h2>
            <div className='row'>
                <div className='col'>
                    <CardCmpt Cardimg={Cardimg} Cardtitle={Cardtitle} />
                </div>
                <div className='col'>
                    <CardCmpt Cardimg={img2} Cardtitle={Cardtitle} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default ArticleSection