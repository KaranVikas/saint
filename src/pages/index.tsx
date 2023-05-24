import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../components/HeroSection/HeroSection"
import ArticleSection from "../components/ArticleSection/ArticleSection"
import Layout from "../components/Layout/Layout"
import Articles from "../components/Articles/Articles"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <div>
      <Layout>
      <HeroSection/>
      <ArticleSection/>
      </Layout>
    </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
