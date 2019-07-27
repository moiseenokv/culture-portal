import React from 'react'
import Header from './header'
import '../styles/layout.css'

const Layout = ({ children, path }) => (
  <div>
    <Header path={path} />
    <main>{children}</main>
  </div>
)

export default Layout
