import * as React from 'react'
import { Link } from 'gatsby'
import {nav} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav className={nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout