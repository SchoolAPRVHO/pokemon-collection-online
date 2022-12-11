import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const Pokemon = () => {
  const data = useStaticQuery(graphql`
  query {
    allWpPokemon {
      edges {
        node {
          pokemonFieldGroup {
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            title
          }
          id
          slug
          title
          uri
        }
      }
    }
  }
  `)
  const pokemonData = data.allWpPokemon.edges
  return (
    <Layout pageTitle={"Pokemon Overview"}>
      <div class="pokemonContainer">
        {pokemonData.map((pokemon) => {
          const {title} = pokemon.node.pokemonFieldGroup
          const image = getImage(pokemon.node.pokemonFieldGroup.picture.localFile)
          return (
            <div className="pokemonCard">
              <GatsbyImage image={image} alt={title} />
              <h2>{title}</h2>
              <Link to={`/pokemon/${pokemon.node.slug}`}>View Pokemon</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Pokemon
