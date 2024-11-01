
import React, { ReactNode } from 'react'
import "./global.css"
import Header from '@/components/Header';
import Providers from './providers';
import Tabs from '../components/Tabs';





type LayoutProps = {
  children: ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (

    <html lang="en">
      <body>
        <Providers >


          <Header />
          <Tabs/>
          {children}
          
        </Providers>
      </body>
    </html>
  )
}

export default Layout