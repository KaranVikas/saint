import React from 'react'
import Layout from '../components/Layout/Layout'

import ShareBtn from '../components/ShareBtn/ShareBtn'
import LongShareBtn from '../components/LongShareBtn/LongShareBtn'
import './blogItem.css'
import { DottedLine } from '../svgs'
import Eyes from '../Assets/Eyes.png'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from "@sanity/image-url"

import NewsLetter from '../components/NewsLetter/NewsLetter'
import Articles from '../components/Articles/Articles'
// import BlockContent from 'sanity/block-content-to-react'

const blogItem = ({ pageContext }: any) => {
  console.log("pageContexsdaat", pageContext)

  const { blog } = pageContext
  console.log("aname", pageContext.blog.authorname)
  console.log("pageContext", pageContext)
  // console.log("image",pageContext.blog.image.asset.gatsbyImageData.images.fallback.src)
  console.log("richtxt", pageContext.blog._rawRichText)
  // console.log("AuthorName",pageContext.blog.author.asset.gatsbyImageData.images.fallback.src)
  console.log("content", pageContext.blog.content)

  const AuthorImg = pageContext.blog.author.asset.gatsbyImageData.images.fallback.src
  const BlogImg = pageContext.blog.image.asset.gatsbyImageData.images.fallback.src

  const builder = imageUrlBuilder({
    projectId: "iqfl976a",
    dataset: "production",
  })

  const serializers = {
    types: {
      image: ({ node }) => {
        const imageUrl = builder.image(node.asset).url()
        return <img src={imageUrl} alt={node.alt} />
      },
    },
  }

  return (

    <Layout>
      {/* <div className="container"></div> */}
      <div className='container text-center'>
        <h1 className='mainPageStyle nyel'>A few words about this blog platform, Ghost, and how this site was made</h1>
        <h3 className='mainPageStyle sfmono'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</h3>
      </div>
      <div className='text-center mainImgdiv' style={{ marginBottom: "32px" }}>
        <img className='mainImg text-center w-100' src={BlogImg} alt="main image" />
      </div>
      {/* <HeroSection /> */}
      <div className="blog-detail-section">
        <div className="container">
          <div className='w-100 mx-auto mainLine mb-4' style={{ border: '2px solid #000000' }}></div>

          <div className="d-flex justify-content-between">
            <div className='d-flex'>

              <div className='profileimg me-3'>
                <img className="col h-100 w-100" src={AuthorImg} alt="profileimg" style={{ borderRadius: "50%" }} />
              </div>
              <div className='authDetails1 d-flex flex-column'>
                <div className="authorName">{pageContext.blog.authorname}</div>
                <div className="data">Apr 15, 2020 · 4 min read</div>
              </div>
            </div>

            <div className='d-flex  '>
              <ShareBtn />
            </div>

          </div>

          <div className='richText'>
            <BlockContent blocks={pageContext.blog._rawRichText}  serializers={serializers}/>
          </div>


          <div className='long-share-btn'>
            <LongShareBtn />
          </div>

          <div className='d-flex justify-content-start mt-3 tags'>
            <h3 className='tags m-0 ' style={{fontFamily:"600"}}>Tags:  
            <u className='ps-2'>product design,</u>
            <u className='ps-1'>culture</u>
            
            </h3>
          </div>

          <div className='my-3'>
            <DottedLine />
          </div>

          <div className='blog-section-authDetails'>
            <div className="d-flex justify-content-between" style={{ gap: "20px" }}>
              <div className='profileimg2'>
                <img className="" src={AuthorImg} alt="profileimg" style={{ borderRadius: "50%", objectFit: "cover", width: "72px", height: "72px" }} />
              </div>
              <div className='authDetails d-flex flex-column'>
                <div className="authorName">{pageContext.blog.content}</div>
                <div className="data"></div>
              </div>
            </div>
          </div>




        </div>
        <img src={Eyes} alt="" className='blog-detail-section-eyes' />
      </div>
      <Articles />
      <NewsLetter />

    </Layout>
  )
}

export default blogItem

