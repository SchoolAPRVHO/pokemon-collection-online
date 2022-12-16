import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'
import "../../components/styles.css"

const Success = () => (
    <Layout pageTitle="Success">
      <div className="container">
          <p className="center">Your question is submitted.<br/>We'll get back to you as fast as possible</p>
          <Link to="/" className="navItem">Terug naar de homepage</Link>
          <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' alt="Pikachu" width={250} />
      </div>
    </Layout>
  )
  
  export default Success
  