import * as React from "react"

import Layout from "../components/layout"
import "../components/styles.css"

const NotFoundPage = () => {
  return (
      <Layout>
        <div class="container">
          <img
            class="pokemonImage"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
            alt="Pikachu"
          />
          <div class="title">
            Oh no, the page you are looking for cannot be found!
          </div>
          <div class="description">
            It looks like you may have stumbled upon a missing page. Don't worry,
            just use the back button to return to the previous page, or visit our
            homepage to start over.
          </div>
          <a class="backButton" href="/">
            Back
          </a>
        </div>
      </Layout>
  )
}

export default NotFoundPage
