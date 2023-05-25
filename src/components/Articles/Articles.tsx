import React from 'react'

import { useStaticQuery, graphql, Link } from "gatsby"
import CardCmpt from '../CardCmpt/CardCmpt'

const Articles = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityBlog {
        nodes {
          image {
            asset {
              gatsbyImageData
            }
          }
          title
        }
      }
    }
  `)
  console.log("Articles", data.allSanityBlog.nodes)
  return (
    <div>
      {/* <h2 className="nyel" style={{color:"black"}}>What to read next</h2> */}
      <div className='container'>
        <div className='row'>
          {/* <CardCmpt Cardimg={Cardimg} Cardtitle={Cardtitle} /> */}
          {
            data.allSanityBlog.nodes.map((element, index) => {
              const CardImg = element.image.asset.gatsbyImageData.images.fallback.src;
              const CardTitle = element.title;
              const URL = 'https://main--resilient-kheer-e69c36.netlify.app'
              return (
                <div className='col-6'>
                  <Link to={`${URL}/BlogItem/${index}`}>
                    <CardCmpt key={index} Cardimg={CardImg} Cardtitle={CardTitle} />
                  </Link>
                </div>
              )
            }
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Articles