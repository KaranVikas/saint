import React from 'react'
import CardCmpt from '../CardCmpt/CardCmpt'
// import { CardImg } from 'react-bootstrap'
import Cardimg from '../../Assets/Image1.png'
import img2 from '../../Assets/Image2.png'
import { Link } from "gatsby"
import './ArticleSection.css'
import Articles from '../Articles/Articles'



const ArticleSection = () => {
    const Cardtitle="Here are some things you should know regarding how we work "
  return (
    <div className='container'>
        <div className='text-center row'>
            <h2 style={{color:"black"}}>All articles</h2>
                <Articles/>
            {/* <div className='row mx-0'>
                <div className='col mx-0'>
                    <Link to="BlogItem/0/">
                        <CardCmpt Cardimg={Cardimg} Cardtitle={Cardtitle} />
                    </Link>
                   
                </div>
                <div className='col mx-0'>
                    <CardCmpt Cardimg={img2} Cardtitle={Cardtitle} />
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default ArticleSection