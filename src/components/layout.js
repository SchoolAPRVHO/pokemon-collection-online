import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './styles.css';

const Layout = ({ pageTitle, children }) => {
  const {site:{siteMetadata: {title, description}}} = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }`);
  return (
    <div className="pokemonPage">
      <title>{pageTitle} | {title}</title>
      <nav className={"nav"}> 
        <h1 className={"navBrand"}>{title}</h1>
        <Link className={"navItem"} to="/">Home</Link>
        <Link className={"navItem"} to="/about">About</Link>
      </nav>
      <main>
        <h1 className='pageTitle'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
