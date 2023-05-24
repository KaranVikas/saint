import React, { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'

 interface LayoutProps  { 
    children: React.ReactNode
 }

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout