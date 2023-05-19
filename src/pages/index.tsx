import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header/header"
import HeroSection from "../components/HeroSection/HeroSection"
import ArticleSection from "../components/ArticleSection/ArticleSection"
import Footer from "../components/Footer/Footer"




const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <div>
      <Header/>
      <HeroSection/>
      <ArticleSection/>
      <Footer/>
    </div>
    
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
